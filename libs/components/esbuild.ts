import { build } from '@headless/tooling';
import path from 'path';

// build();

const components = [
  './src/widget-kit/js/SimpleButton.ts',
  './src/widget-kit/js/SimpleTextbox.ts',
  './src/widget-kit/js/SimpleCheckbox.ts',
  './src/widget-kit/js/SimpleList.tsx',
  './src/widget-kit/js/SimpleCommandBar.tsx',
  './src/ComponentJsExample.tsx'
];

// Step 1: Build each component separately
components.forEach((filePath) => {
  build({
    entryPoints: [filePath],
    outfile: `dist/${path.basename(filePath).replace(/\.(tsx?)$/, '')}.js`, // Outputs to dist folder
  }).catch(() => process.exit(1));
});

// Step 2: Build the index.ts
// TODO: run a full build for now before figure out a good solution
build({
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/index.js',
  // external: components.map((filePath) => `./dist/${path.basename(filePath).replace(/\.(tsx?)$/, '')}.js`), // Mark them as external to avoid rebundling
}).catch(() => process.exit(1));