import { build as esbuild, BuildOptions as EsbuildOptions } from 'esbuild';
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';
import { externalGlobalPlugin } from 'esbuild-plugin-external-global';
import { envPlugin } from './envPlugin';
import { declViewPlugin } from './declViewPlugin';

export interface BuildOptions {
  entryPoints?: string[];
  outfile?: string;
  external?: string[];
  externalGlobal?: Record<string, string>;
}

export const getEsbuildOption = (opts?: BuildOptions): EsbuildOptions => {
  const external = [
    ...new Set(
      ['esbuild-node-externals', 'react'].concat(
        opts?.external || [],
        Object.keys(opts?.externalGlobal || [])
      )
    ),
  ];

  const externalGlobal = opts?.externalGlobal
    ? Object.entries(opts.externalGlobal).reduce((acc, [key, value]) => {
        return {
          ...acc,
          ...(value ? { [key]: value } : {}),
        };
      }, {} as Record<string, string>)
    : null;

  return {
    entryPoints: opts?.entryPoints || ['src/index.ts'],
    outfile: opts?.outfile || 'dist/index.js',
    platform: 'node',
    format: 'esm',
    target: ['esnext', 'node18'],
    sourcemap: true,
    bundle: true,
    // minify: true,
    external,
    plugins: [
      envPlugin,
      declViewPlugin,
      sassPlugin({
        filter: /\.module\.scss$/,
        type: 'style',
        transform: postcssModules({
          localsConvention: 'camelCaseOnly',
        }),
      }),
      // resolve in browser by globalThis
      ...(externalGlobal ? [externalGlobalPlugin(externalGlobal)] : []),
    ],
  };
};

/**
 * build library using esbuild
 *
 * @returns build result
 */
export const build = (opts?: BuildOptions) => {
  // https://github.com/adamjarling/medium-es-build-article-demo/blob/main/build.js
  return esbuild(getEsbuildOption(opts));
};
