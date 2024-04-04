<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 15:08:57
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 16:24:14
 * @FilePath: /project/src/components/sidebarNav/SiderBarNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_2']"
            show-collapse-button breakpoint="xl" @collapse="onCollapse">
            <a-menu-item key="0">
                <template #icon><icon-apps></icon-apps></template>
                <RouterLink to="/dashboard">
                    首页
                </RouterLink>
            </a-menu-item>
            <a-sub-menu key="1">
                <template #icon><icon-user></icon-user></template>
                <template #title>
                    <RouterLink to="/users">
                        用户管理
                    </RouterLink>
                </template>
                <a-menu-item key="1_0">Menu 1</a-menu-item>
                <a-menu-item key="1_1">Menu 2</a-menu-item>
                <a-menu-item key="1_2">Menu 3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="2">
                <template #icon><icon-bulb /></template>
                <template #title>
                    <RouterLink to="/roles">
                        角色管理
                    </RouterLink>
                </template>
                <a-menu-item key="2_0">Menu 1</a-menu-item>
                <a-menu-item key="2_1">Menu 2</a-menu-item>
                <a-sub-menu key="2_2" title="Navigation 4">
                    <a-menu-item key="2_2_0">Menu 1</a-menu-item>
                    <a-menu-item key="2_2_1">Menu 2</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="3">
                <template #icon><icon-menu /></template>
                <template #title>
                    <RouterLink to="/menus">
                        菜单管理
                    </RouterLink>
                </template>
                <a-menu-item key="2_0">Menu 1</a-menu-item>
                <a-menu-item key="2_1">Menu 2</a-menu-item>
                <a-sub-menu key="2_2" title="Navigation 4">
                    <a-menu-item key="2_2_0">Menu 1</a-menu-item>
                    <a-menu-item key="2_2_1">Menu 2</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script lang="ts">
import { Message } from '@arco-design/web-vue'
import { PropType, defineComponent } from 'vue'

interface MenuItem { 
    name: string
    path: string
}

export default defineComponent({
    props: {
        menus: {
            type: Array as PropType<Array<MenuItem>>,
            default: () => [] as MenuItem[],
        }
    },
    setup () {
        return {
            onCollapse(_val: any, type: any) {
                const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
                Message.info({
                    content,
                    duration: 2000,
                });
            }
        }
    }
})
</script>

<style scoped>

</style>