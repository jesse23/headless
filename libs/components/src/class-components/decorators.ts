export function Component({ name }: { name: string }) {
  return function (target: any) {
    target.prototype.name = name;
  };
}

export function State() {
  return function (target: any, context) {
    if (context.kind === 'field') {
      return function (initialValue: any) {
        target.data[context.key] = initialValue;
        return initialValue;
      };
    }
  };
}

export function Action() {
  return function (target: any, context) {
    if (context.kind === 'method') {
      this.actions = {
        ...this.actions,
        [context.key]: target,
      };
      return target;
    }
  };
}

export function Lifecycle(hook: 'onMount' | 'onUnmount' | 'onUpdate') {
  return function (target: any, context) {
    if (context.kind === 'method') {
      this.lifecycle = {
        ...this.lifecycle,
        [context.key]: target,
      };
      return target;
    }
  };
}

export function Render() {
  return function (target: any, context) {
    if (context.kind === 'method') {
      this.render = target;
      return target;
    }
  };
}
