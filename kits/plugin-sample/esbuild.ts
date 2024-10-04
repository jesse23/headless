import { build } from '@headless/tooling/esbuild';

build({
  // for plugin, externalGlobal is the right approach, the expectation is
  // the dependencies are already loaded in the global scope
  external: [ '@headless/reactivity' ],
  externalGlobal: {
    // swf
    '@headless/core': 'globalThis.swf.core',
    '@headless/compiler': 'globalThis.swf.compiler',
    '@headless/interop': 'globalThis.swf.interop',
    '@headless/components': 'globalThis.swf.components',
    // react
    react: 'globalThis.React',
    'react/jsx-runtime': "globalThis.React['jsx-runtime']",
    'react-dom': 'globalThis.ReactDOM',
  },
});