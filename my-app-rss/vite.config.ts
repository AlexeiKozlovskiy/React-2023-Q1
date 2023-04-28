/// <reference types="vitest" />
/// <reference types="vite/client" />

import viteTsconfigPaths from 'vite-tsconfig-paths';
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
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
