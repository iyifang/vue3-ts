<template>
  <el-menu class="el-menu-vertical-demo" :class=" isCollapse ? 'is-open-menu' : ''" unique-opened mode="vertical" :collapse="isCollapse" active-text-color="#ffd04b"
    background-color="#545c64" text-color="#fff">
    <sidebar-item :route="route" v-for="route in routes" :key="route.path" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { useRouterStore } from '@/store/modules/router'

const routerStore = useRouterStore()
const { routes } = routerStore


const isCollapse = ref(true)

</script>

<style scoped></style>