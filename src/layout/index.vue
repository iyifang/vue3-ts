<script setup lang="ts">
import Sidebar from './conmponent/sidebar/index.vue'
import Main from './conmponent/main.vue'
</script>

<template>
    <div class="app-container">
        <div class="sidebar">
            <Sidebar />
        </div>
        <Main class="main-box" />
    </div>
</template>

<style>
.app-container{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
}
</style>