
// declaration.d.ts
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*ViewModel' {
  const Component: (props: Record<string, unknown>) => JSX.Element
  export { Component }
  export default Component
}


declare namespace JSX {
  interface Element {
    __placeholder?: never;
  }
}
