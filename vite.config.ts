import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['quasar']
  },
  ssr: {
    noExternal: ['quasar', '@quasar/extras']
  }
})