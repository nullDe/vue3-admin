import { defineConfig } from "vite";
import path from "path";
import { createVitePlugins } from './config/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import './src/assets/styles/variables.scss';`
      }
    }
  },

  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 8080, // 端口号
    open: false, // 自动打开浏览器
    cors: false, // 跨域设置允许
    strictPort: false, //端口被占用使用下一个端口
    // 接口代理
    proxy: {
      "/api": {
        // 本地 8000 前端代码的接口 代理到 8888 的服务端口
        target: "http://127.0.0.1:8000/",
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace("/api/", "/"),
      },
    },
  },
});
