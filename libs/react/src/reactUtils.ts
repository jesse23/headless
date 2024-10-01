import {
  Data,
  Store,
  cloneJson,
  getValue,
  UseStoreFn,
  ViewModelDefinition,
  applyValues,
  initActions,
  execLifecycleHook,
  subscribeEvents,
  unsubscribeEvents,
  initActionsFromActionFn,
  createActionFromActionFn,
  registerLibDeps,
  parseView,
  ComponentDefinition,
  bindTrailingArgs,
  FunctionType,
  getViewDeps,
  applyValue
} from '@headless/core';
import { useRef, useEffect, useState, createElement } from 'react';
import { compiler } from '@headless/react-compiler';

type UsePartialStoreFn = (store: Store, path: string) => Store;

// not used yet
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

export const useStore: UseStoreFn = (initFn) => {
  const lastState = useRef(initFn());

  const getData = useRef(() => lastState.current).current;

  const [_, setData] = useState(getData());

  const updateData = useRef((values: Data): void => {
    setData((lastState.current = applyValues(getData(), values)));
  }).current;

  return { getData, updateData };
};

export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  // props
  // - use it as a ref hook since we don't want to listen to props change
  //   - for UI driven action, it will always be the latest value
  //   - for Model driven action, it may not be the latest if the UI rendering is delayed.
  const propsRef = useRef({} as Record<string, unknown>);
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;

  // data
  const { getData, updateData } = useStore(() => cloneJson(viewDef.data));

  // actions
  const actions = useRef(
    initActions(viewDef.actions || {}, { getData, updateData }, getProps)
  ).current;

  // lifecycle hooks
  useEffect(() => {
    execLifecycleHook(viewDef, actions, 'onMount');
    return () => {
      execLifecycleHook(viewDef, actions, 'onUnmount');
    };
    // action hook is stable since it is with useStore
  }, [actions, viewDef]);

  // onUpdate
  useEffect(() => {
    execLifecycleHook(viewDef, actions, 'onUpdate');
  });

  // onEvent
  useEffect(() => {
    const subscriptions = subscribeEvents(viewDef, actions);
    return () => {
      unsubscribeEvents(subscriptions);
    };
  }, [actions, viewDef]);

  return {
    getData,
    updateData,
    actions,
    data: getData(),
  };
};


export const defineComponent = (componentDef: ComponentDefinition) => {
  const Component = (props: Record<string, unknown>) => {
    // props
    const propsRef = useRef({} as Record<string, unknown>);
    const getProps = useRef(() => propsRef.current).current;
    propsRef.current = props;

    // data
    const { getData, updateData } = useStore(() =>
      cloneJson(componentDef.data)
    );

    // actions
    const actions = useRef(
      initActionsFromActionFn(
        componentDef.actions,
        { getData, updateData },
        getProps
      )
    ).current;

    // lifecycle hooks
    useEffect(() => {
      const actionFn = componentDef.lifecycleHooks?.onMount;
      if (actionFn) {
        // TODO: need await here
        createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
      }

      const subscriptions = subscribeEvents({ onEvent: componentDef.onEvent} as ViewModelDefinition, actions);

      return () => {
        unsubscribeEvents(subscriptions);

        const actionFn = componentDef.lifecycleHooks?.onUnmount;
        if (actionFn) {
          createActionFromActionFn(
            actionFn,
            { getData, updateData },
            getProps
          )();
        }
      };
      // action hook is stable since it is with useStore
    }, [actions, getData, getProps, updateData]);

    // onUpdate
    useEffect(() => {
        const actionFn = componentDef.lifecycleHooks?.onUpdate;
        if (actionFn) {
          createActionFromActionFn(
            actionFn,
            { getData, updateData },
            getProps
          )();
        }
    });

    return componentDef.render(props, getData(), actions);
  };
  Component.displayName = componentDef.name || 'anonymous';
  return Component;
};


export const defineComponentDecl = (viewDef: ViewModelDefinition) => {
  const viewDepDefs = (viewDef.imports || []) as string[];

  const viewCompileResult = compiler.compile(parseView(viewDef.view || ''), {
    index: 0,
    level: 0,
    deps: viewDepDefs.reduce((prev, name) => ({ ...prev, [name]: {} }), {}),
  });

  // render fn
  const argc = [
    'props',
    'data',
    'actions',
    ...viewDepDefs,
    'styles',
    'createElement',
    'usePartialStore',
  ];
  const argv = [viewDef.styles || {}, createElement, usePartialStore];
  const renderView = bindTrailingArgs(
    new Function(
      ...argc,
      [
        ...Object.keys(viewCompileResult.partialStore).map(fullPath => {
          const varName = fullPath.replace(/\./g, '_');
          let store, path = '';
          const paths = fullPath.split('.');
          if( fullPath.startsWith('props.')) {
            store = `${paths[0]}.${paths[1]}`;
            path = paths.slice(2).join('.');
          } else {
            store = paths[0];
            path = paths.slice(1).join('.');
          }
          if( path) {
            return `const ${varName} = usePartialStore(${store}, '${path}')`
          }
          return `const ${varName} = ${store}`
        }),
        `// quickly overwrite`,
        `data = data.getData();`,
        `return ${viewCompileResult.contents.join('\n')}`,
      ].join('\n')
    ) as FunctionType,
    ...argv
  );

  const Component = (props: Record<string, unknown>) => {
    const { getData, updateData, actions } = useViewModel(viewDef, props);

    const data = { getData, updateData };

    // view deps
    const [viewDeps, setViewDeps] = useState(
      Array(viewDepDefs.length).fill('')
    );
    useEffect(() => {
      const updateViewDeps = async (depNames: string[]) => {
        setViewDeps(
          await Promise.all(
            depNames.map((depName) => getViewDeps(depName, defineComponentDecl))
          )
        );
      };
      updateViewDeps(viewDepDefs);
    }, [viewDepDefs]);

    // render
    return renderView(
      props,
      data,
      actions,
      ...viewDeps
    ) as JSX.Element;
  };
  Component.displayName = viewDef.name || 'anonymous';

  return Component;
};

registerLibDeps('view', {
  defineComponent,
  defineComponentDecl,
});