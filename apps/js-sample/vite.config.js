import { defineConfig } from 'vite';
import { declViewPlugin } from '@headless/vite';
import react from '@vitejs/plugin-react-swc';

/*
function externalizeDependencyPlugin() {
	return {
		name: 'externalize-dependency',
    enforce: 'pre',
		resolveId(source) {
      console.log('resolveId', source);
			if (source === 'date-fns') {
				return { id: './deps.js', external: true };
			}
			return null;
		},
	};
}
  */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [declViewPlugin(), react({
    tsDecorators: true,
  }) /*externalizeDependencyPlugin()*/],
  /*
  resolve: {
    alias: [{
      find: 'date-fns',
      replacement: './deps'
    }],
  },
  */
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
        manualChunks: (id) => {
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
});
