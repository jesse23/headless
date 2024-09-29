import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function externalizeDependencyPlugin() {
	return {
		name: 'externalize-dependency',
    enforce: 'pre',
		resolveId(source) {
      console.log('resolveId', source);
      /*
			if (source === 'date-fns') {
				return { id: './deps.js', external: true };
			}
        */
			return null;
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), externalizeDependencyPlugin()],
  /*
  resolve: {
    alias: [{
      find: 'date-fns',
      replacement: './deps'
    }],
  },
  */
  build: {
    minify: false,
    rollupOptions: {
      external: [ './deps.js']
    }
  }
})

