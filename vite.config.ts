import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'deepseek-harness' with your exact GitHub repository name
  base: '/deepseek-harness-web/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
