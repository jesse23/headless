/*
NOT Sure Why but for getting it work we will need at least one component here
*/

import { Component } from '@stencil/core';

@Component({
  tag: 'mock-example',
  shadow: false,
})
export class DataExample {

  render() {
    return (
      <div class="card">
        <h2>Data Example</h2>
      </div>
    );
  }
}
