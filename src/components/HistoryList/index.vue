<template>
    <div class="history-list">
        <div class="tabs">
            <router-link :to="item.path" @mouseover="hoveTab(item)" @mouseleave="leave" v-for="item in tabList"
                :key="item.path" class="tab-item">
                {{ item.title }}
                <el-icon class="close" @click.prevent="delTab(item)"
                    v-if="item == hoveTabVlaue && item.path !== '/home/index' || (activeMenu == item.path && item.path !== '/home/index')">
                    <CircleClose />
                </el-icon>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouterStore } from '@/store/modules/router'
import { useRouter } from 'vue-router';
import { CircleClose } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';

const router = useRouter()
const routerStore = useRouterStore()
let { tabList } = storeToRefs(routerStore)

let activeMenu = ''

watch(() => router.currentRoute.value.path, (_nVal, _oVal) => {
    routerStore.setActiveRoute(router.currentRoute.value)
    activeMenu = routerStore.activeRoute
}, { immediate: true })

const delTab = (e: any) => {
    routerStore.delTabRoute(e)
    router.push('/')
}

const hoveTabVlaue = ref('')
const hoveTab = (e) => {
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
    padding: 5px 0;

    .tabs {
        display: flex;

        .tab-item {
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 1px 6px #ccc;
            color: black;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            .close {
                margin-left: 6px;
            }
        }

        .tab-item:hover {
            background-color: skyblue;
            color: white;
        }

    }

    /* router-link动态添加class失效，修改原生class */
    .router-link-active {
        background-color: skyblue !important;
        color: white !important;
    }
}
</style>