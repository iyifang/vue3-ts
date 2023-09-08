<template>
    <el-button @click="login">登录</el-button>
    <div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()
const userInfo = {
    name: '王花花',
    sex: 0,
    token: 'token',
    roles: [0,1]
}

const login = async ()=>{
    await userStore.login(userInfo)
    router.push('/')
}

</script>