import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {}, // process.env 빈 객체를 정의
    'process': {}       // process 객체를 전역에 정의
  },
  build: {
    lib: {
      entry: 'src/main.jsx',  // 엔트리 파일 설정
      name: 'MyReactApp',  // UMD 빌드 시 사용될 글로벌 네임스페이스
      fileName: (format) => `my-react-sdk.${format}.js`,
    },
    rollupOptions: {
      // React와 ReactDOM을 외부 의존성으로 설정하지 않음
      external: [],
      output: {
        globals: {
          react: 'React',
          'react-dom/client': 'ReactDOM',
        },
        // ESModule을 사용하지 않도록 설정
        format: 'umd',  // 반드시 UMD로 지정
      },
    },
  },
  plugins: [react()],
})