import {
  Component,
  ComponentDefinition,
  ViewModelDefinition,
} from '@headless/types';
import {
  camelCaseToHyphen,
} from '@headless/utils';
import {
  registerDefineComponent,
} from '@headless/core';

export const removeImports = (viewDef: ViewModelDefinition): ViewModelDefinition => {
  return {
    ...viewDef,
    imports: []
  }
}

export const defineComponent = (
  componentDef: ComponentDefinition,
  _ = {} as Record<string, Component>
): Component => {
  class DeclCustomElement extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // Collect all attributes into an object
      const props: Record<string, unknown> = {};
      Array.from(this.attributes).forEach((attr) => {
        props[attr.name] = isNaN(Number(attr.value))
            ? attr.value
            : Number(attr.value);
      });

      // assuming that the componentDef is already defined
      const elem = document.createElement(
        'dynamic-component'
      ) as HTMLElement & {
        // NOTE: needed since we are not importing h here
        props: Record<string, unknown>;
        componentDef: ComponentDefinition;
      };
      elem.props = props;
      elem.componentDef = componentDef;
      this.appendChild(elem);
    }

    // Override setAttribute to observe all attributes
    setAttribute(name, value) {
      super.setAttribute(name, value);
      this.handleAttributeChange(name, value);
    }

    // Override removeAttribute to observe attribute removal
    removeAttribute(name) {
      const oldValue = this.getAttribute(name);
      super.removeAttribute(name);
      this.handleAttributeChange(name, oldValue, null); // Old value can be used to detect removal
    }

    // Handle attribute changes
    handleAttributeChange(name, newValue, _ /*oldValue*/ = null) {
      const changedProps = {};
      changedProps[name] =
        newValue !== null
          ? isNaN(Number(newValue))
            ? newValue
            : Number(newValue)
          : null;

      const dynamicComponent = this.querySelector('dynamic-component');
      if (dynamicComponent) {
        // Update the component's props with the changed value
        dynamicComponent.props = { ...dynamicComponent.props, ...changedProps };
      }
    }
  }

  customElements.define(
    camelCaseToHyphen(componentDef.name),
    DeclCustomElement
  );

  return DeclCustomElement as unknown as Component;
};

registerDefineComponent(defineComponent);
