import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        react: './src/react.ts',
        vue: './src/vue.ts'
      },
      formats: ['es', 'cjs']
    }
  }
});