import '@headless/reactivity/react';
import { createElement } from 'react';
import { ComponentJsExample } from '@headless/components/ComponentJsExample';

import ReactDOM from 'react-dom/client'; 

class MyPanelElement extends HTMLElement {

  app: ReactDOM.Root | null;

  constructor() {
    super();
    this.app = null; // Initialize root to null
  }

  connectedCallback() {
    this.app = ReactDOM.createRoot(this);
    this.app.render(createElement(ComponentJsExample));
  }

  disconnectedCallback() {
    if (this.app) {
      this.app.unmount();
    }
  }
}

// Define the custom element
customElements.define('component-wc-react-example', MyPanelElement);
