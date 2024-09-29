import { build } from '@headless/tooling';

build({
  externalGlobal: {
    // swf
    '@headless/core': 'globalThis.swf.core',
    '@headless/react': 'globalThis.swf.react',
    '@headless/react-compiler': 'globalThis.swf.react.compiler',
    '@headless/components': 'globalThis.swf.components',
    // react
    react: 'globalThis.React',
    'react/jsx-runtime': "globalThis.React['jsx-runtime']",
    'react-dom': 'globalThis.ReactDOM',
  },
});