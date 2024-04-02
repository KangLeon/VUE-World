/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:13:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 03:58:47
 * @FilePath: /project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

function pathResolve(dir:string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
        style: 'css'
      })],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 4000,
  }
})
