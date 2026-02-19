import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://api.notion.com',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 최신 컴파일러를 사용하도록 설정하여 @import 경고를 방지합니다.
        // 타입 에러 방지를 위해 문자열로 처리하거나 무시 설정을 추가합니다.
        ...({ api: 'modern-compiler' } as any),
        additionalData: `
          @use "@/styles/abstracts/variables" as *;
          @use "@/styles/abstracts/mixins" as *;
        `,
      },
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
  },
});
