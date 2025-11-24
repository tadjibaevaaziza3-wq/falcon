import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env vars regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    build: {
      outDir: 'build',
    },
    // Use '/' for root domain hosting (falcon-telecom-expert.uz)
    base: '/', 
    define: {
      // Expose API_KEY specifically
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.REACT_APP_API_KEY || env.API_KEY),
      // Prevent crashes if code checks for process.env (defines it as an empty object)
      'process.env': JSON.stringify({}), 
    },
    server: {
      open: true,
    },
  };
});