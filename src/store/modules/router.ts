import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { intersection } from '@/utils/function'
import { baseRouter, routeModuleList } from '@/router/index'

export const useRouterStore = defineStore('router',{
    state: ()=>{
        return{
            routes: [] as Array<RouteRecordRaw>,
            activeRoute: 'home',
            tabsList : [{title: '首页',path: '/'}]
        }
    },
    actions:{
        filterAsyncRouter(roles:Array<number>){
            let asyncRouters: Array<any> = []
            const routesList = [...baseRouter]
            routeModuleList.forEach(item=>{
                /* 获取权限交集 */
                let intersectionArr = intersection(item.meta.roles,roles)
                if(intersectionArr.length>0){
                    asyncRouters.push(item)
                    routesList.push(item)
                }
            })
            this.routes = routesList
            return asyncRouters
        },

        /* 保存选中路由和历史记录tab */
        setActiveRoute(route: RouteRecordRaw){
            this.activeRoute = route.path
            if(this.tabsList.length == 0){
                this.tabsList.push({ title: route.meta.title, path: route.path })
            }else{
                if(!this.tabsList.some(i => i.path === route.path)){
                    this.tabsList.push({ title: route.meta.title, path: route.path })
                }
            }
        },
    },
    persist:{
        key: 'router',
        storage: sessionStorage,
        paths: ['activeRoute','tabsList']
    }
})