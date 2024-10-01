import { build } from '@headless/tooling/esbuild';

build();

// build for auto load
build({
    entryPoints: ['src/register.ts'],
    outfile: 'dist/register.js',
    external: ['.'],
});