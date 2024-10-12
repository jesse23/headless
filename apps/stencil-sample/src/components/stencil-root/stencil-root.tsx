import { Component, State } from '@stencil/core';
import '../decl';

@Component({
  tag: 'stencil-root',
  shadow: false,
})
export class StencilRoot {
  @State() count: number = 0;



  render() {
    return (
      <div>
        <mock-example></mock-example>
        <component-js-example></component-js-example>
        <data-example></data-example>
        <event-example-container></event-example-container>
      </div>
    );
  }
}
