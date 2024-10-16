import { build } from '@headless/esbuild';
import path from 'path';

const components = [
  './src/react.ts',
  './src/vue.ts',
  './src/solid.ts',
  './src/angular.ts',
  './src/stencil.ts',
];

// Build each component separately
components.forEach((filePath) => {
  build({
    entryPoints: [filePath],
    outfile: `dist/${path.basename(filePath).replace(/\.(tsx?)$/, '')}.js`, // Outputs to dist folder
    // NOTE: external here is the right approach, not externalGlobal
    external: ['@headless/core', 'react', 'vue', 'solid-js', '@stencil/core'],
  }).catch(() => process.exit(1));
});
