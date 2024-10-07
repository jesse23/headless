import { build } from '@headless/esbuild';

// build for esm entry
build({
  // if put it as deps, means it's self contained even we define external here
  // if put it as peerDeps, means it's not self contained, and user can
  // choose different version
  external: ['@headless/interop'],
});

// build for auto load
// NOTE: register here doesn't mean the js is self-contained, if
// first build has externals, which is possible
build({
  entryPoints: ['src/register.ts'],
  outfile: 'dist/register.js',
  external: ['.'],
});
