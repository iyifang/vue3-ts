<template>
    <div>
        <el-button @click="logout">退出登录</el-button>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

const logout = ()=>{
    userStore.logout()
    router.push('/login')
}
</script>