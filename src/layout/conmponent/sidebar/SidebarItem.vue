<template>
    <div v-if="!route.hidden">
        <div v-if="(!route.children || route.children.length == 1) && !route.showParent">
            <el-menu-item :index="route.path" @click="toPath">
                <template #title>
                    <svg-icon :icon-class="route.meta.icon"></svg-icon>
                    <span>{{ route.meta.title }}</span>
                </template>
            </el-menu-item>
        </div>
        <div v-else>
            <el-sub-menu :index="route.path">
                <template #title>
                    <svg-icon :icon-class="route.meta.icon"></svg-icon>
                    <span v-if="route.meta">{{ route.meta.title }}--{{ route.meta.icon }}</span>
                </template>
                <sidebar-item :route="children" v-for="children in route.children" :key="children.path"></sidebar-item>
            </el-sub-menu>
        </div>
    </div>
</template>

<script lang="ts" setup name="SidebarItem">
import { useRouter } from 'vue-router'
const router = useRouter()

const { route } = defineProps(['route'])

function toPath() {
    console.log(route.path);
    console.log(router);
    router.push(route.path)
}

</script>

<style scoped></style>