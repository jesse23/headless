import { build } from '@headless/esbuild';

build({
  external: ['@headless/core', '@headless/interop'],
});
