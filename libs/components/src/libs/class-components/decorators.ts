import { Data } from '@headless/types/types';

export class BaseComponent {
  declComponentName: string;

  public getData(): Data {
    throw new Error('Method not implemented.');
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function Component({ name }: { name: string }) {
  /*
  return function (target: any) {
    target.componentName = name;
  };
  */

  return function <T extends { new (...args: any[]): BaseComponent }>(
    constructor: T
  ) {
    return class extends constructor {
      // name
      constructor(...args: any[]) {
        super(args);
        this.declComponentName = name;
      }
    };
  };
}

export function State() {
  return function (
    target: any,
    propertyKey: string /*descriptor: PropertyDescriptor*/
  ) {
    // Initialize the property in the constructor
    target.declDataAttributes = [
      ...(target.declDataAttributes || []),
      propertyKey,
    ];

    target.getData = function () {
      return target.declDataAttributes.reduce((prev, key) => {
        return {
          ...prev,
          [key]: this[key],
        };
      }, {});
    };
  };
}

export function Action() {
  return function (
    target: any,
    propertyKey: string,
    // descriptor: PropertyDescriptor
  ) {
    // Initialize the property in the constructor
    target.declActionAttributes = [
      ...(target.declActionAttributes || []),
      propertyKey,
    ];

    target.getActions = function () {
      return target.declActionAttributes.reduce((prev, key) => {
        return {
          ...prev,
          [key]: this[key],
        };
      }, {});
    };
  };
}

export function Lifecycle(hook: 'onMount' | 'onUnmount' | 'onUpdate') {
  return function (target: any, context) {
    if (context.kind === 'method') {
      this.lifecycle = {
        ...this.lifecycle,
        [hook]: target,
      };
      return target;
    }
  };
}

export function Render() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    target.render = descriptor.value;
  };
}
