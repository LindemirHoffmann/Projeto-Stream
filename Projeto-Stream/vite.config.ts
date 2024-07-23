import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
    
  return {
    plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    ],
    server: {
      proxy: {
        '/api': {
         target: process.env.VITE_BASE_URL,
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
     alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
