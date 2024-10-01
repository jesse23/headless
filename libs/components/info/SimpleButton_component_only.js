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
  const { props, actions, styles, functions: { createElement: createElement2, usePartialStore: usePartialStore2, getData, updateData }, components: {} } = param;
  let data = { getData, updateData };
  data = data.getData();
  return createElement2("div", {
    "key": 0
  }, [
    createElement2("button", {
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
    functions: { createElement, usePartialStore, getData, updateData }
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
