import { Config } from '@stencil/core';
import AutoImport from 'unplugin-auto-import/rollup';

export const config: Config = {
  namespace: 'stencil-sample',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [AutoImport({
    include: [
      /\.[tj]sx$/, // .ts, .tsx, .js, .jsx
    ],
    imports: {
      '@stencil/core': ['h'],
    }
  })],
  testing: {
    browserHeadless: 'new',
  },
};
