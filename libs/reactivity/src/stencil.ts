// For Stencil JSX:
// - it is close to react from the h API point of view.
// - the key attribute is a random uuid as `h("div", { key: 'cac875c7615db2ade5681f0d116f905d59b7d958', class: "card" }, h("h2"...`
// - It doesn't use export component but instead use web component directly in JSX as `<my-component />`
// - props passed in JSX will be treated as DOM Property, not Attribute
// - attribute in stencil are all string if it is html attribute

export * from './stencil/utils';
export * from './stencil/dynamic-component';