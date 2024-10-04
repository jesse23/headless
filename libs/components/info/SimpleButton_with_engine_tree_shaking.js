// src/widget-kit/css/SimpleButton.module.scss
var css = `._simple-button_gveqw_1 {
  border-radius: 2px;
  border: 1px solid;
  text-align: center;
  outline: none;
  width: auto;
  padding: 4px 8px;
  font-weight: bold;
  min-height: 24px;
  box-sizing: border-box;
}
._simple-button_gveqw_1._disabled_gveqw_12 {
  border: 1px solid;
  opacity: 1;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16 {
  background-color: #005f87;
  border-color: #003951;
  color: #fff;
  fill: #fff;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16:not(._disabled_gveqw_12):hover {
  background-color: #004c6c;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16:not(._disabled_gveqw_12):active {
  background-color: #003951;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var SimpleButton_module_default = {
  "simpleButton": "_simple-button_gveqw_1",
  "disabled": "_disabled_gveqw_12",
  "accentHighContrast": "_accent-highContrast_gveqw_16"
};

// ../core/src/utils.ts
var evalExpression = (expr, scope, ignoreError = false, applyObject) => {
  const names = scope ? Object.keys(scope) : [];
  const vals = scope ? Object.values(scope) : [];
  try {
    const func = new Function(...names, `return ${expr};`);
    return func.apply(applyObject, vals);
  } catch (e) {
    if (!ignoreError) {
      throw new Error(`evalExpression('${expr}') => ${e.message}`);
    } else {
      return void 0;
    }
  }
};
var isArray = Array.isArray;
var getValue = (scope, path) => {
  return evalExpression(path, scope, true);
};
var applyValueInternal = (paths, value, prev) => {
  if (paths.length === 0) {
    return prev;
  } else if (paths.length === 1) {
    const path = paths[0];
    return { ...prev, [path]: value };
  } else {
    const curr = prev[paths[0]] || {};
    return { ...prev, [paths[0]]: applyValueInternal(paths.slice(1), value, curr) };
  }
};
var applyValue = (path, value, prev) => {
  return applyValueInternal(path.split("."), value, prev);
};
var applyValues = (prev, values) => {
  return Object.entries(values).reduce((prev2, [path, value]) => {
    const prevValue = getValue(prev2, path);
    return prevValue === value ? prev2 : applyValue(path, value, prev2);
  }, prev);
};
var parseExpr = (str) => {
  const match = str.match(/^{{(.*)}}$/);
  return match ? match[1] : "";
};
var cloneJson = (input) => {
  return input ? JSON.parse(JSON.stringify(input)) : input;
};

// ../core/src/deps.ts
var _libDeps = {};
var getLibDeps = async (libName) => {
  return await _libDeps[libName] || {};
};

// ../core/src/actions.ts
var evalDataDefinitionInternal = (input, scope, level) => {
  if (Array.isArray(input)) {
    for (const key in input) {
      const value = input[key];
      if (typeof value === "string") {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  } else if (typeof input === "object") {
    for (const key in input) {
      const value = input[key];
      if (typeof value === "string") {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  }
};
var evalDataDefinition = (input, scope) => {
  const store = cloneJson(input);
  evalDataDefinitionInternal(store, scope, 0);
  return store;
};
var evalOutputData = (outputData, result) => {
  return Object.entries(outputData).reduce((prev, [path, resultPath]) => {
    return {
      ...prev,
      [path]: resultPath?.length > 0 ? getValue(result, resultPath) : result
    };
  }, {});
};
var createActionFn = (actionDef) => {
  const actionFn = async (data, props, eventData) => {
    const fn = (await getLibDeps(actionDef.deps))[actionDef.method];
    const inputData = evalDataDefinition(actionDef.inputData, {
      data,
      props,
      eventData
    });
    const result = await fn(...Object.values(inputData));
    return evalOutputData(
      actionDef.outputData,
      result
    );
  };
  return actionFn;
};
var createActionFromActionFn = (actionFn, store, getProps) => {
  return async (eventData) => {
    const res = await actionFn(store.getData(), getProps(), eventData);
    if (res) {
      store.updateData(res);
    }
  };
};
var initActionsFromActionFn = (actionFnMap, store, getProps) => {
  return Object.entries(actionFnMap).reduce((prev, [actionName, actionFn]) => {
    return {
      ...prev,
      [actionName]: createActionFromActionFn(actionFn, store, getProps)
    };
  }, {});
};

// ../core/src/events.ts
var subscribeEvents = (viewDef2, actions) => {
  return (viewDef2.onEvent || []).map((eventListener) => {
    const { eventId, action } = eventListener;
    const actionFn = actions[action];
    if (!actionFn) {
      console.warn(`action ${action} not found in actions`);
      return null;
    }
  });
};
var unsubscribeEvents = (subscriptions) => {
  subscriptions.forEach(
    (sub) => sub
    /*&& eventBus.unsubscribe(sub)*/
  );
};

// ../core/src/views.ts
var _ctx = {
  views: {},
  viewStoreService: null
};
var getViewDepsCached = (viewName) => {
  return _ctx.views[viewName] || {};
};
var getViewDep = async (viewName, defineComponentDecl) => {
  if (!_ctx.views[viewName] && _ctx.viewStoreService) {
    const viewDef2 = await _ctx.viewStoreService.getView(viewName, {});
    _ctx.views[viewName] = defineComponentDecl(viewDef2);
  }
  return getViewDepsCached(viewName) || {};
};

// ../react/src/reactUtils.ts
import { useRef, useEffect, useState, createElement } from "react";
import { createElement as createElement2 } from "react";
var usePartialStore = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;
  const getData = useRef(() => getValue(getStoreData(), path)).current;
  const updateData = useRef((values) => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path2, value]) => {
        const prevValue = getValue(prev, path2);
        return prevValue === value ? prev : applyValue(path2, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;
  return { getData, updateData };
};
var useStore = (initFn) => {
  const lastState = useRef(initFn());
  const getData = useRef(() => lastState.current).current;
  const [_, setData] = useState(getData());
  const updateData = useRef((values) => {
    setData(lastState.current = applyValues(getData(), values));
  }).current;
  return { getData, updateData };
};
var createComponentDefinition = ({
  name,
  data,
  actions,
  lifecycleHooks,
  onEvent
}) => {
  const actionFnMap = Object.entries(actions || {}).reduce(
    (prev, [name2, actionDef]) => {
      return {
        ...prev,
        [name2]: createActionFn(actionDef)
      };
    },
    {}
  );
  const lifecycleHookFnMap = Object.entries(lifecycleHooks || {}).reduce(
    (prev, [name2, actionName]) => {
      return {
        ...prev,
        [name2]: actionFnMap[actionName]
      };
    },
    {}
  );
  return {
    name,
    data,
    actions: actionFnMap,
    lifecycleHooks: lifecycleHookFnMap,
    onEvent
  };
};
var useComponentDefinition = (componentDef2, props) => {
  const propsRef = useRef({});
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;
  const { getData, updateData } = useStore(() => cloneJson(componentDef2.data));
  const actions = useRef(
    initActionsFromActionFn(
      componentDef2.actions,
      { getData, updateData },
      getProps
    )
  ).current;
  useEffect(() => {
    const actionFn = componentDef2.lifecycleHooks?.onMount;
    if (actionFn) {
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
    const subscriptions = subscribeEvents(
      { onEvent: componentDef2.onEvent },
      actions
    );
    return () => {
      unsubscribeEvents(subscriptions);
      const actionFn2 = componentDef2.lifecycleHooks?.onUnmount;
      if (actionFn2) {
        createActionFromActionFn(actionFn2, { getData, updateData }, getProps)();
      }
    };
  }, [actions, getData, getProps, updateData]);
  useEffect(() => {
    const actionFn = componentDef2.lifecycleHooks?.onUpdate;
    if (actionFn) {
      createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
    }
  });
  return {
    getData,
    updateData,
    actions,
    data: getData()
  };
};
var useViewDeps = (viewDepDefs2) => {
  const [viewDeps, setViewDeps] = useState({});
  useEffect(() => {
    const updateViewDeps = async (depNames) => {
      setViewDeps(
        (await Promise.all(
          depNames.map(
            async (depName) => [
              depName,
              await getViewDep(depName, null)
            ]
          )
        )).reduce(
          (prev, [depName, dep]) => ({
            ...prev,
            [depName]: dep
          }),
          {}
        )
      );
    };
    updateViewDeps(viewDepDefs2);
  }, [viewDepDefs2]);
  return viewDeps;
};

// src/widget-kit/viewmodel/SimpleButtonViewModel.json
var viewDef = {
  "schemaVersion": "1.0.0",
  "name": "SimpleButton",
  "data": {},
  "actions": {},
  "view": `<button class="{{styles.simpleButton + ' ' + styles.accentHighContrast}}" onclick="{{props.action}}">{{props.children}}</button>`
};
var viewDepDefs = viewDef.imports || [];
var componentDef = createComponentDefinition(viewDef);
var renderFn = (param) => {
  const { props, actions, styles, functions: { createElement: createElement3, usePartialStore: usePartialStore2, getData, updateData }, components: {} } = param;
  let data = { getData, updateData };
  data = data.getData();
  return createElement3("div", {
    "key": 0
  }, [
    createElement3("button", {
      "key": 0,
      "className": styles.simpleButton + " " + styles.accentHighContrast,
      "onClick": props.action
    }, [
      props.children
    ])
  ]);
};
var Component = (props) => {
  const { getData, updateData, actions } = useComponentDefinition(
    componentDef,
    props
  );
  const viewDeps = useViewDeps(viewDepDefs);
  return renderFn({
    props,
    data: getData(),
    actions,
    styles: SimpleButton_module_default,
    components: viewDeps,
    functions: { createElement: createElement2, usePartialStore, getData, updateData }
  });
};
Component.displayName = viewDef.name || "anonymous";
var SimpleButtonViewModel_default = Component;

// src/widget-kit/js/SimpleButton.ts
var SimpleButton = SimpleButtonViewModel_default;
export {
  SimpleButton
};
//# sourceMappingURL=SimpleButton.js.map
