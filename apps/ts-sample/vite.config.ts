import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
// https://github.com/vitejs/vite/issues/5370
// either we use approach below or we have to prebuild the tooling package
// import {transpileViewModelJson, transpileJson } from '@swfn/tooling';
import {transpileViewModelJson, transpileJson } from '../../libs/tooling/src';

// https://github.com/vitejs/vite/discussions/12788
const declViewPlugin = ()/*: PluginOption*/ => {
  return {
    name: 'declViewPlugin',
    async load(id) {
      if (/^.*ViewModel\.json$/g.test(id)) {
        const jsonPath = id;
        const code = id.endsWith('commandViewModel.json')
          ? await transpileJson(jsonPath)
          : await transpileViewModelJson(jsonPath);

        // NOTE: need to fix
        const htmlPath = jsonPath
          .replace('ViewModel.json', 'View.html')
          .replace('/viewmodel/', '/view/');
        this.addWatchFile(htmlPath);

        return { code };
      }
    },
    configResolved(resolvedConfig) {
      // skip vite:json since it will compile *ViewModel.json too
      resolvedConfig.plugins = resolvedConfig.plugins.filter(
        (p) => p.name !== 'vite:json'
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), declViewPlugin(), react(), optimizeLodashImports()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].js',
        manualChunks: (id: string) => {
          if (id.includes('/node_modules/')) {
            return 'vendor';
          } else {
            if (id.includes('/plugin/')) {
              return 'plugin';
            }

            if (id.includes('/libs/')) {
              return 'swf';
            }
          }

          return undefined;
        },
      },
    },
  },
  /*
  esbuild: {
    include: /(\.tsx?$)|(ViewModel.json$)/,
  }
  */
});

