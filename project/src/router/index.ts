/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:27:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 14:14:38
 * @FilePath: /project/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

//TODO：添加很多
const routes = [{
    path: '/login',
    component: () => import('@/views/login/login.vue'),
},{
    path: '/reg',
    component: () => import('@/views/login/reg.vue'),
}, {
    path: "/home",
    component: () => import('@/layout/default.vue'),
    redirect: 'home/dashboard',
    children: [{
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue')
    }]
}] as RouteRecordRaw[];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function setupRouter(app: App<Element>) { 
    app.use(router);
}