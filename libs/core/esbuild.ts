import { build } from '@headless/esbuild';

// build for esm entry
build({
  // if put it as deps, means it's self contained even we define external here
  // if put it as peerDeps, means it's not self contained, and user can
  // choose different version
  external: ['@headless/interop', '@headless/transform'],
});


// build for jsx runtime
build({
  entryPoints: ['src/jsx-runtime.ts'],
  outfile: 'dist/jsx-runtime.js',
  external: ['.'],
});

// build for auto load
// NOTE: register here doesn't mean the js is self-contained, if
// first build has externals, which is possible
// which means it is not a CDN ready JS
build({
  entryPoints: ['src/register.ts'],
  outfile: 'dist/register.js',
  external: ['.'],
});


// build for cdn
build({
    entryPoints: ['src/register.ts'],
    outfile: 'dist/cdn/core.js',
    external: ['@headless/transform'],
    externalGlobal: {
      '@headless/interop': 'window.swf.interop',
      '@headless/transform': 'window.swf.transform',
    }
});