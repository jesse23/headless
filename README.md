# headless
test bad for headless ui

# TODO
- [x] Recheck current architecture works for all repos
      - [x] ts-sample
      - [x] js-sample
      - [x] react-sample
      - [x] vue-sample (partially)
      - [x] solid-sample
      - [x] stencil-sample
- [x] Clean up libraries one by one
- [x] Clean up aw factors
- [ ] Extend the design to vue
      - [x] defineComponent
      - [x] defineComponentDeclView
      - [x] defineComponentDecl
- [x] Extend the design to solid
- [x] Extend the design to stencil
- [ ] Example to use component library
- [ ] Re-enable strict mode

# Libraries
- [x] lv0: tooling    -> compile util but has dependencies with view
- [x] lv0: view       -> html compiler, generic to all frameworks
- [x] lv0: interop        -> interops and event bus, lv0 since no deps on core
  - [x] lv1: core       -> core engine and utils
    - [x] lv2: react      -> react related hooks
      - [x] lv3: components -> components lib, should only depend on core
        - core is used only for some typing
        - react is used only for defineComponent API
