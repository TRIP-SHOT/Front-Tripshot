import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접속 허용
    port: 5173, // 사용할 포트 번호
    strictPort: true, // 지정한 포트를 사용할 수 없는 경우 서버 시작 실패
  },
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
