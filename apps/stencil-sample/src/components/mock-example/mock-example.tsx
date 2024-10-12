/*
NOT Sure Why but for getting it work we will need at least one component here
*/

import { Component, State } from '@stencil/core';

@Component({
  tag: 'mock-example',
  shadow: false,
})
export class MockExample {
  @State() count: number = 0;

  render() {
    return (
      <div class="card" style={{ display: 'none' }}>
        <button  onClick={() => console.log('mock')} count={this.count}>
          Not sure why but at least for stencil test bed, we will need below for now:
          - At least one stencil Component
          - All the attribute we used it needs to be defined in this mock component
        </button>
      </div>
    );
  }
}
