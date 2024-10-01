import {
  Data,
  cloneJson,
  getValue,
  UseStoreFn,
  ViewModelDefinition,
  applyValues,
  subscribeEvents,
  unsubscribeEvents,
  initActionsFromActionFn,
  createActionFromActionFn,
  parseView,
  ComponentDefinition,
  getViewDeps,
  applyValue,
  RenderFn,
  createActionFn,
  Component,
  UsePartialStoreFn,
} from '@headless/core';
import { useRef, useEffect, useState, createElement } from 'react';
import { createCompiler } from '@headless/view';

export { createElement } from 'react';

export { registerLibDeps } from '@headless/core';

/**
 * Create render function content from view model definition and parsed view as HTMLElement
 * @param viewDef view model definition
 * @param node parsed view as HTMLElement
 * @returns 
 */
const createRenderFnContent = (viewDef: ViewModelDefinition, node: HTMLElement): {
  args: string[],
  contents: string[],
} => {
  const viewDepDefs = (viewDef.imports || []) as string[];

  const compiler = createCompiler();
  const viewCompileResult = compiler.compile(node, {
    index: 0,
    level: 0,
    deps: viewDepDefs.reduce((prev, name) => ({ ...prev, [name]: {} }), {}),
  });

  return {
    args: [ 'param' ],
    contents: [
     `const { props, actions, styles, functions: { createElement, usePartialStore, getData, updateData }, components: { ${viewDepDefs.join(
        ', '
      )}} } = param;`,
      `let data = { getData, updateData };`,
      ...Object.keys(viewCompileResult.partialStore).map((fullPath) => {
        const varName = fullPath.replace(/\./g, '_');
        let store,
          path = '';
        const paths = fullPath.split('.');
        if (fullPath.startsWith('props.')) {
          store = `${paths[0]}.${paths[1]}`;
          path = paths.slice(2).join('.');
        } else {
          store = paths[0];
          path = paths.slice(1).join('.');
        }
        if (path) {
          return `const ${varName} = usePartialStore(${store}, '${path}')`;
        }
        return `const ${varName} = ${store}`;
      }),
      `// quickly overwrite`,
      `data = data.getData();`,
      `return ${viewCompileResult.contents.join('\n')}`,
    ]
  }
};


/**
 * Create render function from view model definition
 * 
 * @param viewDef view model definition
 * @returns render function
 */
const createRenderFn = (viewDef: ViewModelDefinition) => {
  if (!viewDef.view) {
    throw new Error('createRenderFn: viewDef.view is required');
  }
  const { args, contents } = createRenderFnContent(viewDef, parseView(viewDef.view));
  return new Function(...args, contents.join('\n')) as RenderFn;
}

const useStore: UseStoreFn = (initFn) => {
  const lastState = useRef(initFn());

  const getData = useRef(() => lastState.current).current;

  const [_, setData] = useState(getData());

  const updateData = useRef((values: Data): void => {
    setData((lastState.current = applyValues(getData(), values)));
  }).current;

  return { getData, updateData };
};

export const usePartialStore: UsePartialStoreFn = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;

  const getData = useRef(() => getValue(getStoreData(), path) as Data).current;
  const updateData = useRef((values: Data): void => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path, value]) => {
        const prevValue = getValue(prev, path);
        return prevValue === value ? prev : applyValue(path, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;

  return { getData, updateData };
};

export const createComponentDefinition = ({
  name,
  data,
  actions,
  lifecycleHooks,
  onEvent,
}: ViewModelDefinition): ComponentDefinition => {
  const actionFnMap = Object.entries(actions || {}).reduce(
    (prev, [name, actionDef]) => {
      return {
        ...prev,
        [name]: createActionFn(actionDef as Data),
      };
    },
    {}
  );

  const lifecycleHookFnMap = Object.entries(lifecycleHooks || {}).reduce(
    (prev, [name, actionName]) => {
      return {
        ...prev,
        [name]: actionFnMap[actionName],
      };
    },
    {}
  );

  return {
    name,
    data,
    actions: actionFnMap,
    lifecycleHooks: lifecycleHookFnMap,
    onEvent,
  };
};

export const useComponentDefinition = (
  componentDef: ComponentDefinition,
  props: Record<string, unknown>
) => {
  // props
  const propsRef = useRef({} as Record<string, unknown>);
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;

  // data
  const { getData, updateData } = useStore(() => cloneJson(componentDef.data));

  // actions
  const actions = useRef(
    initActionsFromActionFn(
      componentDef.actions,
      { getData, updateData },
      getProps
    )
  ).current;

  // lifecycle hooks and event
  useEffect(() => {
    const actionFn = componentDef.lifecycleHooks?.onMount;
    if (actionFn) {
      // TODO: need await here
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }

    const subscriptions = subscribeEvents(
      { onEvent: componentDef.onEvent } as ViewModelDefinition,
      actions
    );

    return () => {
      unsubscribeEvents(subscriptions);

      const actionFn = componentDef.lifecycleHooks?.onUnmount;
      if (actionFn) {
        createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
      }
    };
    // action hook is stable since it is with useStore
  }, [actions, getData, getProps, updateData]);

  // onUpdate
  useEffect(() => {
    const actionFn = componentDef.lifecycleHooks?.onUpdate;
    if (actionFn) {
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
  });

  return {
    getData,
    updateData,
    actions,
    data: getData(),
  };
};

export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  // TODO: persist this init
  const componentDef = createComponentDefinition(viewDef);

  return useComponentDefinition(componentDef, props);
};

export const useViewDeps = (viewDepDefs: string[]) => {
  const [viewDeps, setViewDeps] = useState({});
  useEffect(() => {
    const updateViewDeps = async (depNames: string[]) => {
      setViewDeps(
        (
          await Promise.all(
            depNames.map(
              async (depName): Promise<[string, unknown]> => [
                depName,
                await getViewDeps(depName),
              ]
            )
          )
        ).reduce(
          (prev, [depName, dep]) => ({
            ...prev,
            [depName]: dep,
          }),
          {}
        )
      );
    };
    updateViewDeps(viewDepDefs);
  }, [viewDepDefs]);

  return viewDeps;
};

export const defineComponent = (componentDef: ComponentDefinition): RenderFn => {
  const renderFn = componentDef.render as RenderFn;

  const Component = (props: Record<string, unknown>) => {
    const { getData, updateData, actions } = useComponentDefinition(
      componentDef,
      props
    );

    return renderFn({
      props,
      data: getData(),
      actions,
      styles: {},
      components: {},
      functions: { createElement, usePartialStore, getData, updateData },
    });
  };
  Component.displayName = componentDef.name || 'anonymous';
  return Component;
};

export const defineComponentDecl = (viewDef: ViewModelDefinition) => {
  if (!viewDef.view) {
    return viewDef as unknown as Component;
  }
  const viewDepDefs = (viewDef.imports || []) as string[];
  const componentDef = createComponentDefinition(viewDef);

  const renderFn = createRenderFn(viewDef);

  const Component = (props: Record<string, unknown>) => {
    const { getData, updateData, actions } = useComponentDefinition(
      componentDef,
      props
    );

    // TODO: convert this to static import
    const viewDeps = useViewDeps(viewDepDefs);

    return renderFn({
      props,
      data: getData(),
      actions,
      styles: viewDef.styles || {},
      components: viewDeps as Record<string, JSX.Element[]>,
      functions: { createElement, usePartialStore, getData, updateData },
    }) as JSX.Element;
  };
  Component.displayName = viewDef.name || 'anonymous';

  return Component;
};

export const defineComponentDeclAsText = (viewDef: ViewModelDefinition, node: HTMLElement): string[] => {
  const res = [];
  res.push(`const viewDef = ${JSON.stringify(viewDef, null, 2)};`);

  const { args, contents } = createRenderFnContent(viewDef, node);

  res.push(`
const viewDepDefs = (viewDef.imports || []);
const componentDef = createComponentDefinition(viewDef);
const renderFn = (${args.join(', ')}) => {
  ${contents.join('\n')}
};

export const Component = (props) => {
  const { getData, updateData, actions } = useComponentDefinition(
    componentDef,
    props
  );

  // TODO: convert this to static import
  const viewDeps = useViewDeps(viewDepDefs);

  return renderFn({
    props,
    data: getData(),
    actions,
    styles: viewDef.styles || {},
    components: viewDeps,
    functions: { createElement, usePartialStore, getData, updateData },
  });
};
Component.displayName = viewDef.name || 'anonymous';
  `.trim());


  /*
  // NOTE: this approach is cool but not usable since the JS code will be minified
  const content = defineComponentDecl.toString().split('\n').slice(1, -2).join('\n');

  res.push(content.replace('const renderFn = createRenderFn(viewDef);', `const renderFn = (${args.join(', ')}) => {
    ${contents.join('\n')}
  };`).replace('const Component =', 'export const Component ='));
  */

  res.push(`export default Component;`);

  return res;
};



