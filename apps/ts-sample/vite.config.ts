import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import { declViewPlugin } from '@headless/tooling/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), declViewPlugin(), react() ],
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
  /*
  esbuild: {
    include: /(\.tsx?$)|(ViewModel.json$)/,
  }
  */
});

