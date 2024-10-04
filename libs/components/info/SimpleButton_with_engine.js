var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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

// ../core/src/index.ts
var src_exports = {};
__export(src_exports, {
  BaseIndent: () => BaseIndent,
  Node: () => Node,
  applyValue: () => applyValue,
  applyValues: () => applyValues,
  bindTrailingArgs: () => bindTrailingArgs,
  camelCaseToHyphen: () => camelCaseToHyphen,
  cloneJson: () => cloneJson,
  createActionFn: () => createActionFn,
  createActionFromActionFn: () => createActionFromActionFn,
  escapeRegExp: () => escapeRegExp,
  evalDataDefinition: () => evalDataDefinition,
  evalExpression: () => evalExpression,
  evalOutputData: () => evalOutputData,
  execLifecycleHook: () => execLifecycleHook,
  getBaseURL: () => getBaseURL,
  getLibDeps: () => getLibDeps,
  getValue: () => getValue,
  getViewDep: () => getViewDep,
  httpGet: () => httpGet,
  initActions: () => initActions,
  initActionsFromActionFn: () => initActionsFromActionFn,
  interopES6Default: () => interopES6Default,
  isArray: () => isArray,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  parseDataPath: () => parseDataPath,
  parseExpr: () => parseExpr,
  parseView: () => parseView,
  printDomNode: () => printDomNode,
  registerLibDeps: () => registerLibDeps,
  registerViewDeps: () => registerViewDeps,
  registerViewStoreService: () => registerViewStoreService,
  subscribeEvents: () => subscribeEvents,
  unsubscribeEvents: () => unsubscribeEvents
});

// ../core/src/utils.ts
var BaseIndent = "  ";
var Node = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11
};
var escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var camelCaseToHyphen = (str) => {
  return str.replace(/^./, str[0].toLowerCase()).replace(/([A-Z])/g, (_, firstMatch) => `-${firstMatch.toLowerCase()}`);
};
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
var parseView = (input) => {
  const parser = new DOMParser();
  const fragement = document.createDocumentFragment();
  fragement.appendChild(parser.parseFromString(`<div>${input}</div>`, "text/html").body.firstChild || document.createElement("div"));
  return fragement.firstChild || document.createElement("div");
};
var bindTrailingArgs = (fn, ...boundArgs) => {
  return function(...args) {
    return fn(...args, ...boundArgs);
  };
};
var interopES6Default = (obj) => {
  return obj && obj.__esModule && obj.default ? obj.default : obj;
};
var formatNode = (node, level = 0) => {
  const tmpNode = (level && node.parentNode ? node.parentNode : node).cloneNode();
  tmpNode.innerHTML = `
${BaseIndent.repeat(level + 1)}<div></div>
${BaseIndent.repeat(level)}`;
  const indentBefore = tmpNode.firstChild;
  const indentAfter = tmpNode.lastChild;
  let childCount = node.childNodes.length;
  if (childCount > 0 && indentBefore && indentAfter) {
    let idx = 0;
    while (idx < childCount) {
      const currNode = node.childNodes[idx];
      if (currNode.nodeType === Node.ELEMENT_NODE) {
        node.insertBefore(indentBefore.cloneNode(), currNode);
        formatNode(currNode, level + 1);
        if (node.lastChild === currNode) {
          node.appendChild(indentAfter.cloneNode());
          idx = childCount;
        } else {
          idx += 2;
          childCount++;
        }
      } else if (currNode.nodeType === Node.TEXT_NODE) {
        const textContent = (currNode.nodeValue || "").trim();
        if (textContent) {
          node.insertBefore(indentBefore.cloneNode(), currNode);
          currNode.nodeValue = textContent;
          if (node.lastChild === currNode) {
            node.appendChild(indentAfter.cloneNode());
            idx = childCount;
          } else {
            idx += 2;
            childCount++;
          }
        } else {
          currNode.nodeValue = textContent;
          if (node.lastChild === currNode) {
            node.appendChild(indentAfter.cloneNode());
          }
          idx++;
        }
      } else {
        idx++;
      }
    }
  }
  return node;
};
var printDomNode = (node) => {
  if (!node) {
    return "";
  }
  const elem = formatNode(node);
  return elem.outerHTML;
};
var httpGet = (theUrl) => {
  return new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        resolve(xmlHttp.responseText);
      }
    };
    xmlHttp.onerror = function(e) {
      reject(e);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  });
};
var getBaseURL = () => {
  if (!getBaseURL._baseURL) {
    const location = window.location;
    const pathname = location.pathname;
    const origin = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
    getBaseURL._baseURL = origin + pathname.substring(0, pathname.lastIndexOf("/") + 1);
  }
  return getBaseURL._baseURL;
};
var parseDataPath = (pathStr) => {
  const match = pathStr.match(/[.[]/);
  if (match && match.index !== void 0) {
    return {
      scope: pathStr.substr(0, match.index),
      path: pathStr.substr(match[0] === "[" ? match.index : match.index + 1)
    };
  }
  return {
    scope: pathStr,
    path: ""
  };
};
var isPrimitive = (val) => {
  const type = typeof val;
  return type === "number" || type === "string" || type === "boolean";
};
var isArray = Array.isArray;
var isObject = (val) => Boolean(val) && !isPrimitive(val) && !isArray(val);
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
var registerLibDeps = (libName, deps) => {
  _libDeps[libName] = deps;
};
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
var createAction = (actionDef, store, getProps) => {
  return createActionFromActionFn(createActionFn(actionDef), store, getProps);
};
var initActions = (actionsDef, store, getProps) => {
  return Object.entries(actionsDef).reduce((prev, [actionName, actionDef]) => {
    return {
      ...prev,
      [actionName]: createAction(actionDef, store, getProps)
    };
  }, {});
};
var initActionsFromActionFn = (actionFnMap, store, getProps) => {
  return Object.entries(actionFnMap).reduce((prev, [actionName, actionFn]) => {
    return {
      ...prev,
      [actionName]: createActionFromActionFn(actionFn, store, getProps)
    };
  }, {});
};

// ../core/src/hooks.ts
var execLifecycleHook = async (viewDef2, actions, lifecycle) => {
  const lifecycleDef = viewDef2.lifecycleHooks?.[lifecycle] || "";
  if (lifecycleDef) {
    const action = actions[lifecycleDef];
    if (action) {
      await action();
    } else {
      console.warn(`action ${lifecycleDef} not found in actions`);
    }
  }
};

// ../interop/src/eventBus.ts
var eventBus_exports = {};
__export(eventBus_exports, {
  publish: () => publish2,
  subscribe: () => subscribe,
  unsubscribe: () => unsubscribe
});

// ../interop/src/utils.ts
var generateId = () => {
  return Math.random().toString(36).substring(2, 11);
};
var publish = ({ topic, channel = "global", payload }, target = null) => {
  const requestId = generateId();
  const request = {
    requestId,
    topic,
    channel,
    payload
  };
  if (target) {
    if (target.postMessage) {
      target.postMessage(request, "*");
    } else {
      throw new Error("Invalid target");
    }
  } else {
    if (window.parent !== window) {
      console.log(`event iframe->parent: ${topic}`);
      window.parent.postMessage(request, "*");
    } else if (window.opener) {
      console.log(`event popup->parent: ${topic}`);
      window.opener.postMessage(request, "*");
    } else if (self !== window) {
      console.log(`event webworker->parent: ${topic}`);
      self.postMessage(request, "*");
    } else {
      console.log(`event to window: ${topic}`);
      window.dispatchEvent(new MessageEvent("message", { data: request }));
    }
  }
  return request;
};
var createMessageEventBus = () => {
  const _subscriptions = {};
  const subscribe2 = ({
    topic,
    channel = "global",
    handler
  }) => {
    const subscription = {
      subscriptionId: generateId(),
      topic,
      channel,
      handler
    };
    _subscriptions[topic] = {
      ..._subscriptions[topic],
      [channel]: {
        ..._subscriptions[topic]?.[channel],
        [subscription.subscriptionId]: subscription
      }
    };
    return subscription;
  };
  const unsubscribe2 = (subscription) => {
    delete _subscriptions[subscription.topic]?.[subscription.channel]?.[subscription.subscriptionId];
  };
  const handleMessage3 = (event) => {
    const { payload, channel, topic } = event.data;
    if (_subscriptions[topic]?.[channel]) {
      return Object.values(_subscriptions[topic][channel]).map(
        ({ handler }) => Promise.resolve(handler(payload))
      );
    }
    return [];
  };
  return {
    publish,
    subscribe: subscribe2,
    unsubscribe: unsubscribe2,
    handleMessage: handleMessage3
  };
};

// ../interop/src/eventBus.ts
var _eventBus = createMessageEventBus();
var publish2 = (eventDef, target) => _eventBus.publish(eventDef, target);
var subscribe = (subsDef) => _eventBus.subscribe(subsDef);
var unsubscribe = (subs) => _eventBus.unsubscribe(subs);
var handleMessage = (event) => _eventBus.handleMessage(event);
if (typeof window !== "undefined") {
  window.addEventListener("message", handleMessage);
}

// ../interop/src/remoteApi.ts
var _pendingRequests = {};
var _eventBus2 = createMessageEventBus();
var handleMessage2 = (event) => {
  const { requestId, topic, ack, payload } = event.data;
  if (requestId) {
    if (ack) {
      const resolve = _pendingRequests[requestId];
      if (resolve) {
        delete _pendingRequests[requestId];
        resolve(payload);
      }
    } else {
      const promises = _eventBus2.handleMessage(event);
      promises.forEach(
        (p) => p.then((payload2) => {
          event.source ? event.source.postMessage({
            requestId,
            ack: true,
            payload: payload2
          }) : window.dispatchEvent(
            new MessageEvent("message", {
              data: {
                requestId,
                topic,
                ack: true,
                payload: payload2
              }
            })
          );
        })
      );
    }
  }
  return [];
};
if (typeof window !== "undefined") {
  window.addEventListener("message", handleMessage2);
}

// ../core/src/events.ts
var subscribeEvents = (viewDef2, actions) => {
  return (viewDef2.onEvent || []).map((eventListener) => {
    const { eventId, action } = eventListener;
    const actionFn = actions[action];
    if (!actionFn) {
      console.warn(`action ${action} not found in actions`);
      return null;
    }
    return eventBus_exports.subscribe({
      topic: eventId,
      handler: (eventData) => {
        actionFn(eventData);
      }
    });
  });
};
var unsubscribeEvents = (subscriptions) => {
  subscriptions.forEach((sub) => sub && eventBus_exports.unsubscribe(sub));
};

// ../core/src/views.ts
var _ctx = {
  views: {},
  viewStoreService: null
};
var registerViewDeps = (viewName, deps) => {
  _ctx.views[viewName] = deps;
};
var registerViewStoreService = (svc) => {
  _ctx.viewStoreService = svc;
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

// ../core/src/index.ts
var globalSwf = globalThis;
globalSwf.swf = {
  ...globalSwf.swf,
  core: src_exports
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
