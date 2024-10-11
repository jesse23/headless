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

// ../react/src/index.ts
var src_exports3 = {};
__export(src_exports3, {
  createComponentDefinition: () => createComponentDefinition,
  createElement: () => createElement2,
  defineComponent: () => defineComponent,
  defineComponentDecl: () => defineComponentDecl,
  defineComponentDeclAsText: () => defineComponentDeclAsText,
  registerLibDeps: () => registerLibDeps,
  useComponentDefinition: () => useComponentDefinition,
  getPartialStore: () => getPartialStore,
  useViewDeps: () => useViewDeps,
  useViewModel: () => useViewModel
});

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
var getViewDep = async (viewName, defineComponentDecl2) => {
  if (!_ctx.views[viewName] && _ctx.viewStoreService) {
    const viewDef2 = await _ctx.viewStoreService.getView(viewName, {});
    _ctx.views[viewName] = defineComponentDecl2(viewDef2);
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

// ../view/src/index.ts
var src_exports2 = {};
__export(src_exports2, {
  createTransformer: () => createTransformer
});

// ../view/src/transformUtils.ts
var BaseIndent2 = "  ";
var NodeType = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11
};
var ReactAttr = {
  class: "className",
  // even use class it is OK
  "ng-readonly": "readOnly",
  // value doesn't matter
  autocomplete: "autoComplete",
  // on|off
  onkeydown: "onKeyDown",
  onsubmit: "onSubmit",
  onclick: "onClick",
  oninput: "onInput",
  onchange: "onChange",
  maxlength: "maxLength",
  for: "htmlFor"
};
function preProcessTemplate(elem, vmContext) {
  const currElem = elem.children && elem.children.length === 1 ? elem.firstElementChild : elem;
  if (vmContext && vmContext.options && vmContext.options.useDomNode === true) {
    currElem.setAttribute("ref", "{{vm.ref}}");
  }
  if (currElem.hasAttribute && !currElem.hasAttribute("ng-repeat")) {
    const currClassValue = currElem.classList ? currElem.classList.value : "";
    const expr2 = currClassValue ? `'${currClassValue}' + ( props.className ? ' ' + props.className : '' )` : 'props.className ? props.className : ""';
    currElem.setAttribute("class", `{{${expr2}}}`);
  }
  const expr = "props.style || {}";
  currElem.setAttribute("style", `{{${expr}}}`);
  return currElem;
}
var hyphenToCamelCase = (str) => {
  return str.replace(/^./, str[0].toUpperCase()).replace(/-(.)/g, (_, firstMatch) => firstMatch.toUpperCase());
};
function generateUpdateVmPropFunction(expr, value) {
  const { scope, path } = parseDataPath2(expr);
  return `update${hyphenToCamelCase(scope)}( { scope: '${path || ""}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} } )`;
}
var parseDataPath2 = (pathStr) => {
  const match = pathStr.match(/[.[]/);
  if (match && match.index !== void 0) {
    return {
      scope: pathStr.substr(0, match.index),
      path: pathStr.substr(match[0] === "[" ? match.index : match.index + 1)
    };
  }
  return {
    scope: pathStr,
    path: void 0
  };
};

// ../view/src/compileElement.ts
function when(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE;
}
function compile(node, context) {
  let contents = [];
  let currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {};
  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== void 0 ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent2.repeat(level);
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }
  currLine.push(
    `${indent}${compiledType ? `${compiledType} && ` : ""}createElement( ${compiledType ? compiledType : `"${elemName}"`}`
  );
  elemName = compiledType ? compiledType : elemName;
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== void 0) {
    const attrIndent = "  ".repeat(level + 1);
    currLine.push(", {");
    contents.push(currLine.join(""));
    if (index !== void 0 && !node.hasAttribute("key")) {
      contents.push(`${attrIndent}"key": ${index},`);
    }
    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;
      name = ReactAttr[name] ? ReactAttr[name] : name;
      const matchDoubleCurly = value.startsWith("{{") && value.endsWith("}}");
      const matchSingleCurly = value.startsWith("{") && value.endsWith("}");
      if (matchDoubleCurly) {
        contents.push(
          `${attrIndent}"${name}": ${value.substring(2, value.length - 2)},`
        );
      } else if (matchSingleCurly) {
        const path = value.substring(1, value.length - 1);
        partialStore[path] = true;
        contents.push(
          `${attrIndent}"${name}": ${path.replace(/\./g, "_")},`
        );
      } else {
        contents.push(`${attrIndent}"${name}": "${value}",`);
      }
    }
    contents[contents.length - 1] = contents[contents.length - 1].replace(
      /,$/,
      ""
    );
    currLine = [`${indent}}`];
  } else {
    currLine.push(", null");
  }
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.transformFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i
      });
      if (childRes) {
        childCompileResults.push(childRes);
      }
    }
    if (childCompileResults.length > 0) {
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent2.repeat(level + 1);
        const funcIndent = BaseIndent2.repeat(level + 2);
        currLine.push(", {");
        contents.push(currLine.join(""));
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(
            childRes.contents.map((c) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          "]`, scope, true);"
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        currLine = [`${indent}}`];
      } else {
        currLine.push(", [");
        contents.push(currLine.join(""));
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = Object.assign(deps, childRes.deps);
          options = Object.assign(options, childRes.options);
          partialStore = Object.assign(partialStore, childRes.partialStore);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          ""
        );
        currLine = [`${indent}]`];
      }
    }
  }
  currLine.push(" )");
  if (level > 0) {
    currLine.push(",");
  }
  contents.push(currLine.join(""));
  return {
    contents,
    deps,
    options,
    partialStore
  };
}
function compileToTemplate(node, context) {
  let contents = [];
  const currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {};
  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== void 0 ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent2.repeat(level);
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }
  currLine.push(`${indent}<${compiledType ? compiledType : elemName}`);
  elemName = compiledType ? compiledType : elemName;
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== void 0) {
    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;
      name = ReactAttr[name] ? ReactAttr[name] : name;
      const matchDoubleCurly = value.startsWith("{{") && value.endsWith("}}");
      const matchSingleCurly = value.startsWith("{") && value.endsWith("}");
      if (matchDoubleCurly) {
        currLine.push(`${name}={${value.substr(2, value.length - 4)}}`);
      } else if (matchSingleCurly) {
        const path = value.substring(1, value.length - 1);
        partialStore[path] = true;
        currLine.push(`${name}={${path.replace(/\./g, "_")}}`);
      } else {
        currLine.push(`${name}="${value}"`);
      }
    }
  }
  contents.push(currLine.join(" ") + ">");
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.transformFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i,
        toTemplate: !(viewDesc && viewDesc.scopeSlot),
        context: "JSX"
      });
      if (childRes) {
        childCompileResults.push(childRes);
      }
    }
    if (childCompileResults.length > 0) {
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent2.repeat(level + 1);
        const funcIndent = BaseIndent2.repeat(level + 2);
        contents.push(`${childIndent}{ {`);
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(
            childRes.contents.map((c) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          "]`, scope, true);"
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        contents.push(`${childIndent}} }`);
      } else {
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = { ...deps, ...childRes.deps };
          options = { ...options, ...childRes.options };
          partialStore = { ...partialStore, ...childRes.partialStore };
        }
      }
    }
  }
  contents.push(`${indent}</${elemName}>`);
  return {
    contents,
    deps,
    options,
    partialStore
  };
}
var compileElement_default = {
  when,
  compile,
  compileToTemplate
};

// ../view/src/compileText.ts
function when2(node, _) {
  return node.nodeType === NodeType.TEXT_NODE;
}
function compile2(node, context) {
  const res = [];
  const indent = BaseIndent2.repeat(context.level);
  const matches = (node.textContent || "").split(/({{.*?}})/g);
  for (let i = 0; i < matches.length; i++) {
    const str = matches[i];
    if (!/^(\r?\n)*$/.test(str)) {
      const match = str.match(/^{{(.*)}}$/);
      if (match) {
        res.push(`${indent}${match[1].trim()},`);
      } else {
        res.push(`${indent}${JSON.stringify(str)},`);
      }
    }
  }
  return {
    contents: res
  };
}
function compileToTemplate2(node, context) {
  const indent = BaseIndent2.repeat(context.level);
  const res = [];
  let matches = (node.textContent || "").trim().split(/({{.*?}})/g);
  matches = matches.filter((o) => o.trim());
  if (matches && matches.length > 0) {
    res.push(indent);
    for (let i = 0; i < matches.length; i++) {
      const str = matches[i];
      if (!/^(\r?\n)*$/.test(str)) {
        const match = str.match(/^{{(.*)}}$/);
        if (match) {
          res.push(`{${match[1]}}`);
        } else {
          res.push(`${str}`);
        }
      }
    }
    return {
      contents: [res.join("")]
    };
  }
}
var compileText_default = {
  when: when2,
  compile: compile2,
  compileToTemplate: compileToTemplate2
};

// ../view/src/compileNgInclude.ts
function when3(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.nodeName === "ng-INCLUDE";
}
function compile3(node, context) {
  const index = context.index;
  const level = context.level;
  const indent = BaseIndent2.repeat(level);
  let componentName = node.getAttribute("src");
  if (componentName) {
    const deps = {};
    let basePath = "";
    const match = componentName.match(/(.*)[\\/]([^\\/]+$)/);
    if (match) {
      basePath = match[1] + "/";
      componentName = match[2];
    }
    const compiledType = `${hyphenToCamelCase(componentName)}`;
    const contents = [];
    contents.push(`${indent}createElement( ${compiledType}, {`);
    const attrIndent = BaseIndent2.repeat(level + 1);
    if (index !== void 0 && !node.hasAttribute("key")) {
      contents.push(`${attrIndent}"key": ${index},`);
    }
    contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
    contents.push(`${indent}} )${context.level ? "," : ""}`);
    deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
    return {
      contents,
      deps
    };
  }
}
function compileToTemplate3(node, context) {
  const level = context.level;
  const indent = BaseIndent2.repeat(level);
  let componentName = node.getAttribute("src");
  if (componentName) {
    const deps = {};
    let basePath = "";
    const match = componentName.match(/(.*)[\\/]([^\\/]+$)/);
    if (match) {
      basePath = match[1] + "/";
      componentName = match[2];
    }
    const compiledType = `${hyphenToCamelCase(componentName)}`;
    const contents = [];
    contents.push(`${indent}<${compiledType} />`);
    deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
    return {
      contents,
      deps
    };
  }
}
var compileNgInclude_default = {
  when: when3,
  compile: compile3,
  compileToTemplate: compileToTemplate3
};

// ../view/src/compileCondition.ts
var Attr = "exist-when";
function when4(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr);
}
function compile4(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const expr = node.getAttribute(Attr);
  node.removeAttribute(Attr);
  contents.push(`${indent}( ( ${expr} ) ?`);
  const childRes = context.transformFn(node, {
    ...context,
    level: context.level + 1
  });
  if (childRes) {
    contents = contents.concat(childRes.contents);
    contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " : null");
    contents.push(`${indent})${context.level ? "," : ""}`);
    return {
      ...childRes,
      contents
    };
  }
}
function compileToTemplate4(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const expr = node.getAttribute(Attr);
  node.removeAttribute(Attr);
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( ${expr} ) ? (`);
  const childRes = context.transformFn(node, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  if (childRes) {
    contents = contents.concat(childRes.contents);
    contents.push(`${indent}) : null${isJsxCtx ? " }" : ""}`);
    return {
      ...childRes,
      contents
    };
  }
}
var compileCondition_default = {
  when: when4,
  compile: compile4,
  compileToTemplate: compileToTemplate4
};

// ../view/src/compileVisible.ts
var Attr2 = "visible-when";
function when5(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr2);
}
function compile5(node, context) {
  const expr = node.getAttribute(Attr2);
  node.removeAttribute(Attr2);
  node.setAttribute("style", `{{(${expr}) ? {} : { display: 'none' }}}`);
  return context.transformFn(node, context);
}
var compileVisible_default = {
  when: when5,
  compile: compile5
};

// ../view/src/compileClass.ts
var Attr3 = "ng-class";
function when6(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr3);
}
function compile6(node, context) {
  const expr = node.getAttribute(Attr3);
  node.removeAttribute(Attr3);
  const currClassValue = node.classList ? node.classList.value : "";
  const match = currClassValue.match(/^{{(.*)}}$/);
  if (match) {
    const classExpr = `processNgClass(${expr}) + ' ' + ${match[1]}`;
    node.setAttribute("class", `{{${classExpr}}}`);
  } else {
    const classExpr = currClassValue ? `processNgClass(${expr}) + ' ${currClassValue}'` : `processNgClass(${expr})`;
    node.setAttribute("class", `{{${classExpr}}}`);
  }
  return context.transformFn(node, context);
}
var compileClass_default = {
  when: when6,
  compile: compile6
};

// ../view/src/compileTransclude.ts
var Attr4 = "transclude";
function when7(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr4);
}
function compile7(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr4);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
function compileToTemplate5(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr4);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent}) : (`);
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
var compileTransclude_default = {
  when: when7,
  compile: compile7,
  compileToTemplate: compileToTemplate5
};

// ../view/src/compileNgTransclude.ts
var Attr5 = "ng-transclude";
function when8(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr5);
}
function compile8(node, context) {
  let contents = [];
  let deps = {};
  const options = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr5);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{processScopeSlot(props.children, slotScope)}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  options.scopeSlot = true;
  return {
    contents,
    deps,
    options
  };
}
function compileToTemplate6(node, context) {
  let contents = [];
  let deps = {};
  const options = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr5);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{processScopeSlot(props.children, slotScope)}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent} ) : (`);
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  options.scopeSlot = true;
  return {
    contents,
    deps,
    options
  };
}
var compileNgTransclude_default = {
  when: when8,
  compile: compile8,
  compileToTemplate: compileToTemplate6
};

// ../view/src/compileNgTransclude.ts
var Attr6 = "ng-transclude";
function when9(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr6);
}
function compile9(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr6);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
function compileToTemplate7(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr6);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent}) : (`);
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
var compileNgTransclude_default = {
  when: when9,
  compile: compile9,
  compileToTemplate: compileToTemplate7
};

// ../view/src/compileRepeat.ts
var Attr7 = "ng-repeat";
function when10(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr7);
}
function compile10(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const childIndent = BaseIndent2.repeat(context.level + 1);
  const expr = node.getAttribute(Attr7) || "";
  node.removeAttribute(Attr7);
  node.setAttribute("key", "{{index}}");
  const match = expr.match(/^(.*\S)(\s+in\s+|\s*:\s*)(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[3];
    let updatePropExpr = "";
    if (/^(ctx|data)\./.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    } else if (/^[A-Za-z]/.test(setExpr)) {
    }
    contents.push(`${indent}processRepeat(${setExpr}, function( key ) {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, function( ${varExpr}, index ) {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}const update${hyphenToCamelCase(varExpr)} = ${varExpr}.dispatch;`);
    }
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);
    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 1,
      index: 0
    });
    if (childRes) {
      childRes.contents[0] = childRes.contents[0].replace(/^(\s+)/, "$1return ");
      contents = contents.concat(childRes.contents);
      contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, ";");
      contents.push(`${indent}} )${context.level ? "," : ""}`);
      return {
        ...childRes,
        contents
      };
    }
  }
}
function compileToTemplate8(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const childIndent = BaseIndent2.repeat(context.level + 1);
  const expr = node.getAttribute(Attr7) || "";
  node.removeAttribute(Attr7);
  node.setAttribute("key", "{{index}}");
  const match = expr.match(/^(.*\S)\s+in\s+(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[2];
    const isJsxCtx = context.context === "JSX";
    let updatePropExpr = "";
    if (/^(ctx|data)([.[]|$)/.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    }
    contents.push(`${indent}${isJsxCtx ? "{ " : ""}processRepeat(${setExpr}, key => {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, ( ${varExpr}, index ) => {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}const update${hyphenToCamelCase(varExpr)} = ${varExpr}.dispatch;`);
    }
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);
    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 2,
      index: 0,
      context: "JS"
    });
    if (childRes) {
      contents.push(`${childIndent}return (`);
      contents = contents.concat(childRes.contents);
      contents.push(`${childIndent});`);
      contents.push(`${indent}} )${isJsxCtx ? " }" : ""}`);
      return {
        ...childRes,
        contents
      };
    }
  }
}
var compileRepeat_default = {
  when: when10,
  compile: compile10,
  compileToTemplate: compileToTemplate8
};

// ../view/src/compileEnter.ts
var Attr8 = "ng-enter-key";
function when11(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr8);
}
function compile11(node, context) {
  const expr = node.getAttribute(Attr8);
  node.removeAttribute(Attr8);
  node.setAttribute("onkeydown", `{{ function(e){ e.which === 13 && ( e.preventDefault() || vm.getAction("${expr}").call()) } }}`);
  return context.transformFn(node, context);
}
var compileEnter_default = {
  when: when11,
  compile: compile11
};

// ../view/src/compileClick.ts
var Attr9 = "ng-click";
function when12(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr9);
}
function compile12(node, context) {
  const expr = node.getAttribute(Attr9);
  node.removeAttribute(Attr9);
  node.setAttribute("onclick", `{{ function($event){ return ${expr} } }}`);
  return context.transformFn(node, context);
}
var compileClick_default = {
  when: when12,
  compile: compile12
};

// ../view/src/compilePropModel.ts
var Attr10 = "ng-prop-model";
function when13(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr10);
}
function compile13(node, context) {
  const expr = node.getAttribute(Attr10) || "";
  node.removeAttribute(Attr10);
  const type = node.getAttribute("type");
  const attr = type === "checkbox" ? "checked" : "value";
  const value = type === "checkbox" ? "e.target.checked" : "e.target.value";
  if (/^(ctx|data)[.[]/.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{function(e){vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}}`);
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{function(e){${generateUpdateVmPropFunction(expr, value)}}}}`);
  }
  return context.transformFn(node, context);
}
function compileToTemplate9(node, context) {
  const expr = node.getAttribute(Attr10) || "";
  node.removeAttribute(Attr10);
  const type = node.getAttribute("type");
  const attr = type === "checkbox" ? "checked" : "value";
  const value = type === "checkbox" ? "e.target.checked" : "e.target.value";
  if (/^(ctx|data)\./.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{e => vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}`);
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{e => ${generateUpdateVmPropFunction(expr, value)}}}`);
  }
  return context.transformFn(node, context);
}
var compilePropModel_default = {
  when: when13,
  compile: compile13,
  compileToTemplate: compileToTemplate9
};

// ../view/src/compilerFactory.ts
var CompilerFactory = class {
  constructor() {
    this._compilers = [];
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  add(compiler) {
    this._compilers.push(compiler);
  }
  compile(node, context = {}) {
    context.transformFn = this.compile.bind(this);
    for (const idx in this._compilers) {
      const compiler = this._compilers[idx];
      if (compiler.when(node, context)) {
        return context.toTemplate && compiler.compileToTemplate ? compiler.compileToTemplate(node, context) : compiler.compile(node, context);
      }
    }
  }
  /**
   * parse view content and convert it to React component
   *
   * @param {Node}  node html content as DOM Node
   * @param {object} vmContext view model definition. See comments for parseViewModel
   * @param {boolean} pretty if true compile to JSX
   * @returns {object} view compile result
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compileView(node, vmContext = {}, pretty = false) {
    const output = this.compile(preProcessTemplate(node, vmContext), {
      level: 0,
      deps: vmContext.viewDesc || vmContext.viewDeps || {},
      props: vmContext.props || {},
      toTemplate: pretty
    });
    return {
      contents: output.contents.join("\n"),
      inlineDeps: output.inlineDeps || {},
      viewDeps: { ...output.deps, ...vmContext.viewDeps },
      libDeps: vmContext.libDeps || {},
      options: { ...output.options, ...vmContext.options },
      partialStore: { ...output.partialStore, ...vmContext.partialStore },
      props: vmContext.props || {}
    };
  }
};

// ../view/src/compileReactButton.ts
var Attr11 = "action";
function when14(node, _) {
  const expr = node.getAttribute && node.getAttribute(Attr11);
  return node.nodeType === NodeType.ELEMENT_NODE && node.nodeName === "REACT-BUTTON" && !(expr || "").startsWith("{{");
}
function compile14(node, context) {
  const expr = node.getAttribute(Attr11);
  node.removeAttribute(Attr11);
  node.setAttribute(Attr11, `{{ vm.getAction('${expr}') }}`);
  return context.transformFn(node, context);
}
var compileReactButton_default = {
  when: when14,
  compile: compile14
};

// ../view/src/compiler.ts
var createTransformer = () => {
  const compiler = new CompilerFactory();
  compiler.add(compileRepeat_default);
  compiler.add(compileCondition_default);
  compiler.add(compileVisible_default);
  compiler.add(compileClass_default);
  compiler.add(compileTransclude_default);
  compiler.add(compileNgTransclude_default);
  compiler.add(compileNgTransclude_default);
  compiler.add(compileEnter_default);
  compiler.add(compilePropModel_default);
  compiler.add(compileClick_default);
  compiler.add(compileReactButton_default);
  compiler.add(compileNgInclude_default);
  compiler.add(compileElement_default);
  compiler.add(compileText_default);
  return compiler;
};

// ../view/src/index.ts
var globalSwf2 = globalThis;
globalSwf2.swf = {
  ...globalSwf2.swf,
  view: src_exports2
};

// ../react/src/reactUtils.ts
import { createElement as createElement2 } from "react";
var getPartialStore = (store, path) => {
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
var createRenderFnContent = (viewDef2, node) => {
  const viewDepDefs2 = viewDef2.imports || [];
  const compiler = createTransformer();
  const viewCompileResult = compiler.compile(node, {
    index: 0,
    level: 0,
    deps: viewDepDefs2.reduce((prev, name) => ({ ...prev, [name]: {} }), {})
  });
  return {
    args: ["param"],
    contents: [
      `const { props, actions, styles, functions: { createElement, getPartialStore, getData, updateData }, components: { ${viewDepDefs2.join(
        ", "
      )}} } = param;`,
      `let data = { getData, updateData };`,
      ...Object.keys(viewCompileResult.partialStore).map((fullPath) => {
        const varName = fullPath.replace(/\./g, "_");
        let store, path = "";
        const paths = fullPath.split(".");
        if (fullPath.startsWith("props.")) {
          store = `${paths[0]}.${paths[1]}`;
          path = paths.slice(2).join(".");
        } else {
          store = paths[0];
          path = paths.slice(1).join(".");
        }
        if (path) {
          return `const ${varName} = getPartialStore(${store}, '${path}')`;
        }
        return `const ${varName} = ${store}`;
      }),
      `// quickly overwrite`,
      `data = data.getData();`,
      `return ${viewCompileResult.contents.join("\n")}`
    ]
  };
};
var createRenderFn = (viewDef2) => {
  if (!viewDef2.view) {
    throw new Error("createRenderFn: viewDef.view is required");
  }
  const { args, contents } = createRenderFnContent(viewDef2, parseView(viewDef2.view));
  return new Function(...args, contents.join("\n"));
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
var defineComponent = (componentDef2) => {
  const renderFn2 = componentDef2.render;
  const Component2 = (props) => {
    const { getData, updateData, actions } = useComponentDefinition(
      componentDef2,
      props
    );
    return renderFn2({
      props,
      data: getData(),
      actions,
      styles: {},
      components: {},
      functions: { createElement, getPartialStore, getData, updateData }
    });
  };
  Component2.displayName = componentDef2.name || "anonymous";
  return Component2;
};
var defineComponentDecl = (viewDef2) => {
  if (!viewDef2.view) {
    return viewDef2;
  }
  const viewDepDefs2 = viewDef2.imports || [];
  const componentDef2 = createComponentDefinition(viewDef2);
  const renderFn2 = createRenderFn(viewDef2);
  const Component2 = (props) => {
    const { getData, updateData, actions } = useComponentDefinition(
      componentDef2,
      props
    );
    const viewDeps = useViewDeps(viewDepDefs2);
    return renderFn2({
      props,
      data: getData(),
      actions,
      styles: viewDef2.styles || {},
      components: viewDeps,
      functions: { createElement, getPartialStore, getData, updateData }
    });
  };
  Component2.displayName = viewDef2.name || "anonymous";
  return Component2;
};
var defineComponentDeclAsText = (viewDef2, node) => {
  const res = [];
  res.push(`const viewDef = ${JSON.stringify(viewDef2, null, 2)};`);
  const { args, contents } = createRenderFnContent(viewDef2, node);
  res.push(`
const viewDepDefs = (viewDef.imports || []);
const componentDef = createComponentDefinition(viewDef);
const renderFn = (${args.join(", ")}) => {
  ${contents.join("\n")}
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
    functions: { createElement, getPartialStore, getData, updateData },
  });
};
Component.displayName = viewDef.name || 'anonymous';
  `.trim());
  res.push(`export default Component;`);
  return res;
};
var useViewModel = (viewDef2, props) => {
  const componentDef2 = createComponentDefinition(viewDef2);
  return useComponentDefinition(componentDef2, props);
};

// ../react/src/index.ts
var globalSwf3 = globalThis;
globalSwf3.swf = {
  ...globalSwf3.swf,
  react: src_exports3
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
  const { props, actions, styles, functions: { createElement: createElement3, getPartialStore: usePartialStore2, getData, updateData }, components: {} } = param;
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
    functions: { createElement: createElement2, getPartialStore, getData, updateData }
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
