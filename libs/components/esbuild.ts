import { build } from '@headless/esbuild';


// Build each component separately
const componentBuildConfigs = {
  ComponentClassExample: 'ComponentClassExample.js',
  ComponentJsExample: 'ComponentJsExample.js',
  ComponentRtExample: 'ComponentRtExample.js',
  SimpleButton: 'SimpleButton.js',
  SimpleCheckbox: 'SimpleCheckbox.js',
  SimpleTextbox: 'SimpleTextbox.js',
  SimpleList: 'SimpleList.js',
  SimpleCommandBar: 'SimpleCommandBar.js',
};

Object.entries(componentBuildConfigs).forEach(([src, dist]) => {
  build({
    entryPoints: [`./src/esm/${src}`],
    outfile: `dist/esm/${dist}`,
    external: ['@headless/core', '@headless/interop'],
  }).catch(() => process.exit(1));
});

// Build the index.ts
build({
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/index.js',
  external: ['@headless/core', '@headless/interop', './esm/*'],
}).catch(() => process.exit(1));

// Build  web components
const WC_COMPONENTS = [
  'ComponentWcReactExample',
  'ComponentWcVueExample',
  'ComponentWcStencilExample',
];

WC_COMPONENTS.forEach((component) => {
  build({
    entryPoints: [`./src/wc/${component}`],
    outfile: `dist/wc/${component}.js`,
    // external: ['@headless/core', '@headless/interop'],
    // TODO: this is not working since dynamic-component needs stencil build
    external: ['@stencil/core'],
    externalGlobal: {
      react: 'React',
      vue: 'Vue',
      'react-dom/client': 'ReactDOM',
      '@headless/core': 'globalThis.swf.core',
      '@headless/core/jsx-runtime': 'globalThis.swf.core.jsxRuntime',
      '@headless/interop': 'globalThis.swf.interop',
      '@headless/transform': 'globalThis.swf.transform',
    },
    // inject: ['./stencil-alias.js'], // Inject alias mapping
  }).catch(() => process.exit(1));
});

// Build react components
const REACT_COMPONENTS = ['ComponentReactExample'];
REACT_COMPONENTS.forEach((component) => {
  build({
    entryPoints: [`./src/react/${component}`],
    outfile: `dist/react/${component}.js`,
    // external: ['@headless/core', '@headless/interop'],
    externalGlobal: {
      react: 'React',
      'react-dom/client': 'ReactDOM',
      '@headless/core': 'globalThis.swf.core',
      '@headless/core/jsx-runtime': 'globalThis.swf.core.jsxRuntime',
      '@headless/interop': 'globalThis.swf.interop',
      '@headless/transform': 'globalThis.swf.transform',
    },
  }).catch(() => process.exit(1));
});

// Build vue components
const VUE_COMPONENTS = ['ComponentVueExample'];
VUE_COMPONENTS.forEach((component) => {
  build({
    entryPoints: [`./src/vue/${component}`],
    outfile: `dist/vue/${component}.js`,
    // external: ['@headless/core', '@headless/interop'],
    externalGlobal: {
      vue: 'Vue',
      '@headless/core': 'globalThis.swf.core',
      '@headless/core/jsx-runtime': 'globalThis.swf.core.jsxRuntime',
      '@headless/interop': 'globalThis.swf.interop',
      '@headless/transform': 'globalThis.swf.transform',
    },
  }).catch(() => process.exit(1));
});

// Build stencil components
/*
Not working - stencil will require stencil build
const STENCIL_COMPONENTS = ['ComponentStencilExample'];
STENCIL_COMPONENTS.forEach((component) => {
  build({
    entryPoints: [`./src/stencil/${component}`],
    outfile: `dist/stencil/${component}.js`,
    external: ['@stencil/core'],
    externalGlobal: {
      '@headless/core': 'globalThis.swf.core',
      '@headless/core/jsx-runtime': 'globalThis.swf.core.jsxRuntime',
      '@headless/interop': 'globalThis.swf.interop',
      '@headless/transform': 'globalThis.swf.transform',
    },
    plugins: [],
  }).catch(() => process.exit(1));
});
*/