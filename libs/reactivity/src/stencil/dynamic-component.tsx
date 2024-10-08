import {
  Data,
  Store,
  Action,
  GetPartialStoreFn,
  ComponentDefinition,
  ViewModelDefinition,
} from '@headless/types';
import {
  cloneJson,
  applyValues,
  createPartialStore,
} from '@headless/utils';
import {
  createActionFromActionFn,
  initActionsFromActionFn,
  subscribeEvents,
  unsubscribeEvents,
} from '@headless/core';
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'dynamic-component',
  // styleUrl: 'component-js-example.css',
  shadow: false,
})
export class DynamicComponent {
  // componentDef
  @Prop() componentDef: ComponentDefinition = {} as ComponentDefinition;

  // props
  @Prop() props: Record<string, unknown> = {};

  getProps = () => {
    return this.props;
  };

  // data
  @State() data: Data;

  getData = () => {
    return this.data;
  };

  updateData = (values: Data) => {
    this.data = applyValues(this.getData(), values);
  };

  // partial store
  private storeMap: Record<string, Store> = {};
  getPartialStore: GetPartialStoreFn = (store, path) => {
    if (!this.storeMap[path]) {
      this.storeMap[path] = createPartialStore(store, path);
    }
    return this.storeMap[path];
  };

  // action
  private actions: Record<string, Action>;

  componentWillLoad() {
    this.data = cloneJson(this.componentDef.data);
    this.actions = initActionsFromActionFn(
      this.componentDef.actions,
      {
        getData: this.getData,
        updateData: this.updateData,
      },
      this.getProps
    );
  }

  // subscriptions
  private subscriptions = [];

  async componentDidLoad() {
    // onMount hook
    const actionFn = this.componentDef.lifecycleHooks?.onMount;
    if (actionFn) {
      // TODO: need await here
      createActionFromActionFn(
        actionFn,
        {
          getData: this.getData,
          updateData: this.updateData,
        },
        this.getProps.bind(this)
      )();
    }

    this.subscriptions = subscribeEvents(
      { onEvent: this.componentDef.onEvent } as ViewModelDefinition,
      this.actions
    );
  }

  async disconnectedCallback() {
    unsubscribeEvents(this.subscriptions);
    this.subscriptions = [];

    // onUnmount hook
    const actionFn = this.componentDef.lifecycleHooks?.onUnmount;
    if (actionFn) {
      // TODO: need await here
      createActionFromActionFn(
        actionFn,
        {
          getData: this.getData,
          updateData: this.updateData,
        },
        this.getProps.bind(this)
      )();
    }
  }

  // update hook
  async componentDidUpdate() {
    const actionFn = this.componentDef.lifecycleHooks?.onUpdate;
    if (actionFn) {
      // TODO: need await here
      createActionFromActionFn(
        actionFn,
        {
          getData: this.getData,
          updateData: this.updateData,
        },
        this.getProps
      )();
    }
  }

  render() {
    return this.componentDef.render({
      props: this.props,
      data: this.data,
      actions: this.actions,
      components: {},
      styles: {},
      functions: {
        createElement: h,
        getPartialStore: this.getPartialStore,
        getData: this.getData,
        updateData: this.updateData,
      },
    });
  }
}
