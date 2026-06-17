import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname,'src') // move root to src
const outDir = resolve(__dirname,'dist') // set distribution back to dist

export default defineConfig({
  root,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main: resolve(root,'index.html')
      }
    }
  }
})
