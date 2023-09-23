
<template>
    <div class="page-header">
        <div class="page-header-left">
            <el-icon @click="changeCollapse" :class="collapse ? '' : 'collapse-switch'">
                <Expand />
            </el-icon>
            <el-breadcrumb separator="/">
                <template v-for="item in road" :key="item">
                    <el-breadcrumb-item>{{ item }}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="user-info">
            <el-dropdown>
                <div class="user-head">
                    <img src="@/assets/images/head.jpg" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>用户名: admin</el-dropdown-item>
                        <el-dropdown-item>用户等级: 管理员</el-dropdown-item>
                        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Expand } from '@element-plus/icons-vue'
import { useAppStore } from '@/store/modules/app'
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useUserStore } from '@/store/modules/user'

const appStore = useAppStore()
const changeCollapse = () => {
    appStore.changeCollapse()
}
const collapse = computed(() => {
    return appStore.collapse
})


const router = useRouter()

let road = computed(() => {
    let currentPath = router.currentRoute.value.path
    let matched = router.currentRoute.value.matched
    let arr: any = []
    if (currentPath.indexOf('home') != -1) {
        arr = ['首页']
    } else {
        arr = matched.map(item=>item.meta.title)
    }
    return arr
})

const userStore = useUserStore()
const logout = () => {
    ElMessageBox.confirm(
        '是否确认退出登录?',
        '提示',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            center: true,
        }
    )
        .then(() => {
            userStore.logout()
            router.push('/login')
        })
        .catch(() => {
        })
}
</script>

<style lang="scss">
.page-header {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 6px #ccc;
    padding: 2px 0;

    .page-header-left {
        display: flex;
    }

    .user-head {
        padding-right: 20px;
        display: flex;

        img {
            width: 40px;
            height: 40px;
            display: block;
            border-radius: 50%;
            object-fit: contain;
        }
    }
}
</style>