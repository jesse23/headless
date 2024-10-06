import { Component } from '@stencil/core';
import '../decl';

@Component({
  tag: 'stencil-root',
  shadow: false,
})
export class StencilRoot {
  render() {
    return (
      <div>
        <data-example></data-example>
        <event-example-container></event-example-container>
        <component-js-example></component-js-example>
      </div>
    );
  }
}
