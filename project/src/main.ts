/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:13:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 03:59:17
 * @FilePath: /project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

function pageConstructor() { 
    const app = createApp(App)
    app.use(ArcoVue, {
        componentPrefix: 'arco',
    })

    //配置router
    setupRouter(app)

    //配置store
    setupStore(app)

    app.mount('#app')
}

pageConstructor()
