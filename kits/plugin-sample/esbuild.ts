import { build } from '@headless/tooling/esbuild';

build({
  // for plugin, externalGlobal is the right approach, the expectation is
  // the dependencies are already loaded in the global scope
  externalGlobal: {
    // swf
    '@headless/core': 'globalThis.swf.core',
    '@headless/view': 'globalThis.swf.view',
    '@headless/ops': 'globalThis.swf.ops',
    '@headless/react': 'globalThis.swf.react',
    '@headless/components': 'globalThis.swf.components',
    // react
    react: 'globalThis.React',
    'react/jsx-runtime': "globalThis.React['jsx-runtime']",
    'react-dom': 'globalThis.ReactDOM',
  },
});