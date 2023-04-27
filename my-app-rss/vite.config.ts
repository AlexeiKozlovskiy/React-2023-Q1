import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
// });

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    exclude: ['node_modules'],
    coverage: {
      provider: 'c8',
      skipFull: true,
      reporter: ['lcov', 'html', 'text-summary'],
      all: true,
    },
  },
});
