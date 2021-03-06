import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // alias 사용
  resolve :  {
    alias : {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@' : path.resolve(__dirname, './src'),
      '/@components' : path.resolve(__dirname, './src/components'),
      '/@compositions': path.resolve(__dirname, './src/compositions'),
      '/@app_modules' : path.resolve(__dirname, './src/modules'),
      '/@store' : path.resolve(__dirname, './src/store'),
      '/@router' : path.resolve(__dirname, './src/router'),
      '/@utils' : path.resolve(__dirname, './src/modules'),
    },
    extensions : ['.js'] // 확장자를 쓰지 않아도 됨
  },
  plugins: [vue()]
})
