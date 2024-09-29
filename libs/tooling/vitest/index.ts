import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  test: {
    globals: true,
    environment: 'happy-dom',
    dir: 'test',
    include: ['**/*.{test,spec}.ts'],
  },
  plugins: [tsconfigPaths()],
};
