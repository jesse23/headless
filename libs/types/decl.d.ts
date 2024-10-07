
// declaration.d.ts
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}


declare module '*ViewModel' {
  import { Component } from "@headless/core";
  const Component: Component;
  export default Component
}

declare namespace JSX {
  interface Element {
    __placeholder?: never;
  }
}
