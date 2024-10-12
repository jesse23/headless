import '@headless/reactivity/vue';
import { createApp, App } from 'vue';
import { ComponentJsExample } from '@headless/components/ComponentJsExample';


class MyPanelElement extends HTMLElement {

  app: App | null;

  constructor() {
    super();
    this.app = null; // Initialize root to null
  }

  connectedCallback() {
    this.app = createApp(ComponentJsExample);
    this.app.mount(this);
  }

  disconnectedCallback() {
    if (this.app) {
      this.app.unmount();
    }
  }
}

// Define the custom element
customElements.define('component-wc-vue-example', MyPanelElement);
