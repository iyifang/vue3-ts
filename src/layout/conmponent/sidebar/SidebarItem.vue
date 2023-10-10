<template>
    <template v-if="!route.hidden">
        <template v-if="!route.children || route.showParent">
            <el-menu-item :index="route.path" @click="toPath">
                <svg-icon :icon-class="route.meta.icon"></svg-icon>
                <template #title>
                    <span>{{ route.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <template v-else>
            <el-sub-menu :index="route.path">
                <template #title>
                    <el-icon>
                        <svg-icon :icon-class="route.meta.icon"></svg-icon>
                    </el-icon>
                    <span v-if="route.meta">{{ route.meta.title }}</span>
                </template>
                <sidebar-item :route="children" v-for="children in route.children" :key="children.path"></sidebar-item>
            </el-sub-menu>
        </template>
    </template>
</template>

<script lang="ts" setup name="SidebarItem">
import { useRouter } from 'vue-router'
import { useRouterStore } from '@/store/modules/router'
const router = useRouter()

const routerStore = useRouterStore()

const { route } = defineProps(['route'])

function toPath() {
    router.push(route.path)
    routerStore.setActiveRoute(route)
}

</script>

<style scoped></style>