import { build } from '@headless/esbuild';

build({
    external: ['@headless/transform']
});
