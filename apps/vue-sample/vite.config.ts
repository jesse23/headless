import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsconfigPaths from 'vite-tsconfig-paths';
import { declViewPlugin } from '@headless/tooling/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), declViewPlugin(), vue(), vueJsx()],
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
              return 'headless';
            }
          }

          return undefined;
        },
      },
    },
  },
})
