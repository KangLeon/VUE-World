<!--
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:28:25
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 14:44:14
 * @FilePath: /project/src/views/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="p-10 flex flex-col justify-center items-center h-full">
        <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
            <a-form-item field="username" tooltip="Please enter username" label="用户名">
                <a-input v-model="form.username" placeholder="请输入您的用户名..." />
            </a-form-item>
            <a-form-item field="password" tooltip="Please enter password" label="密码 ">
                <a-input v-model="form.password" placeholder="请输入您的密码..." />
            </a-form-item>
            <a-form-item field="isRead">
                <a-checkbox v-model="form.isRead"> 登录即表示同意隐私协议 </a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit">提交</a-button>
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
            username: '',
            password: '',
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