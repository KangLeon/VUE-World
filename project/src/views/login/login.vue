<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:28:25
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 12:49:29
 * @FilePath: /project/src/views/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
            <a-form-item field="name" tooltip="Please enter username" label="Username">
                <a-input v-model="form.name" placeholder="please enter your username..." />
            </a-form-item>
            <a-form-item field="post" label="Post">
                <a-input v-model="form.post" placeholder="please enter your post..." />
            </a-form-item>
            <a-form-item field="isRead">
                <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>
        {{ form }}
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        const form = reactive({
            name: '',
            post: '',
            isRead: false,
        });
        const handleSubmit = (data: any) => {
            console.log(data);
        };

        return {
            form,
            handleSubmit,
        };

    }
})
</script>

<style scoped></style>