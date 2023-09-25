<template>
  <el-menu class="el-menu-vertical-demo" :default-active="activeRoute" unique-opened mode="vertical" collapse-transition :collapse="collapse"
    active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
    <sidebar-item :route="route" v-for="route in routes" :key="route.path" />
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { useRouterStore } from '@/store/modules/router'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

const collapse = computed(() => {
  return appStore.getCollapse()
})

const routerStore = useRouterStore()
const { routes } = routerStore

const activeRoute = computed(() => {
  return routerStore.activeRoute
})

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>