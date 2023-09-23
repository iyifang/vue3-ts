<template>
    <div class="history-list">
        <div class="tabs">
            <router-link :to="item.path" @mouseover="hoveTab(item)" @mouseleave="leave" v-for="item in tabList" :key="item.path"
                class="tab-item" :class="item.path == activeMenu ? 'tab-item-active' : ''">
                {{ item.title }}--{{ item.path == activeMenu }}
                <el-icon class="close" v-if="item == hoveTabVlaue && item.path !== '/' || item.path == activeMenu">
                    <CircleClose />
                </el-icon>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { useRouterStore } from '@/store/modules/router'
import { useRouter } from 'vue-router';
import { CircleClose } from '@element-plus/icons-vue'

const router = useRouter()
const routerStore = useRouterStore()
let tabList = []

let activeMenu = ''
/* computed(()=>{
    routerStore.activeRoute
    console.log(activeMenu);
}) */

watch(() => router.currentRoute.value.path, (nVal, oVal) => {
    activeMenu = routerStore.activeRoute
    tabList = routerStore.tabsList
    console.log(tabList);
}, { immediate: true })

const hoveTabVlaue = ref('')
const hoveTab = (e) => {
    console.log(e);
    hoveTabVlaue.value = e
}
const leave = () => {
    hoveTabVlaue.value = ''
}
</script>

<style lang="scss" scoped>
.history-list {
    height: 40px;
    display: flex;
    align-items: center;

    .tabs {
        .tab-item {
            margin: 0 5px;
            padding: 5px 10px;
            height: 26px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 1px 6px #ccc;
            color: black;
            position: relative;

            .close {
                position: absolute;
                top: 0;
                right: 0;
            }
        }

        .tab-item:hover {
            background-color: skyblue;
            color: white;
        }

        .tab-item-active {
            background-color: skyblue;
            color: white;
        }
    }
}
</style>