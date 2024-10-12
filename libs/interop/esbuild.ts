import { build } from '@headless/esbuild';

build();

// build for auto load
build({
    entryPoints: ['src/register.ts'],
    outfile: 'dist/register.js',
    external: ['.'],
});

// build for cdn
build({
    entryPoints: ['src/register.ts'],
    outfile: 'dist/cdn/interop.js',
});