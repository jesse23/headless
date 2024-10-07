import tsconfigPaths from 'vite-tsconfig-paths';

export const vitestConfig = {
  test: {
    globals: true,
    environment: 'happy-dom',
    dir: 'test',
    include: ['**/*.{test,spec}.ts'],
  },
  plugins: [tsconfigPaths()],
};
