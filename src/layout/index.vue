<script setup lang="ts">
import { computed } from 'vue'
import Sidebar from './conmponent/sidebar/index.vue'
import Main from './conmponent/main.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import { useAppStore } from '@/store/modules/app'
import HistoryList from '@/components/HistoryList/index.vue'

const appStore = useAppStore()

const collapse = computed(()=>{
  return appStore.getCollapse()
})
</script>

<template>
    <div class="app-container" :class="collapse ? 'is-open-menu' : ''">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="main">
            <page-header />
            <history-list />
            <Main class="main-box" />
        </div>
    </div>
</template>

<style>
.app-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
}
</style>