import { build } from '@headless/esbuild';

build({
  // for plugin, externalGlobal is the right approach, the expectation is
  // the dependencies are already loaded in the global scope
  externalGlobal: {
    '@headless/core': 'globalThis.swf.core',
    '@headless/core/jsx-runtime': 'globalThis.swf.core.jsxRuntime',
  },
});