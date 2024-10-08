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

# Library Dependencies
## Approach 1 (easy to leak to react)
- lv0: react, tooling(webpack)
- lv1: engine/core, view-compiler....
- lv2: components
- lv3: kit, app

## Approach 2 (react usage is managed)
- lv0: utils, transform, types 
- lv1: [ core, interop ], tooling(utils) -> [ webpack, vite, vitest, esbuild ] 
- lv2: reactivity(react, vue, stencil...), components
- lv3: kit, plugin, app

# Open Questions
Which library should be shipped as source?
Which library should be peer dependency and shared at the app build?
Which library should be build as plugin?


# Call to transform
- transpileViewModelJson         [tooling]
  - generateComponentContent     [transform]
    - generateRenderFnContent    [transform]
      - transform                [transform]

- defineComponentDeclViewSync    [core]
  - generateRenderFnContent      [transform]
    - transform                  [transform]


