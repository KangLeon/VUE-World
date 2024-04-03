<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:28:25
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 11:34:02
 * @FilePath: /project/src/views/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        登录
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "@/utils/axios"

export default defineComponent({
    async setup () {
        const res = await axios.get('/user')
        console.log("请求成功了" + JSON.stringify(res))

        return {}
    }
})
</script>

<style scoped>

</style>