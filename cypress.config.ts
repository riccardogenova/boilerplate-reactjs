/** @format */

import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'u7cf2v',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
