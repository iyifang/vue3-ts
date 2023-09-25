import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { intersection } from '@/utils/function'
import { baseRouter, routeModuleList } from '@/router/index'


export const useRouterStore = defineStore('router',{
    state: ()=>{
        return{
            routes: [] as Array<RouteRecordRaw>,
            activeRoute: 'home',
            tabList : [{title: '首页',path: '/home/index'}]
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
            if(this.tabList.length == 0){
                this.tabList.push({ title: route.meta.title, path: route.path })
            }else{
                if(!this.tabList.some(i => i.path === route.path)){
                    this.tabList.push({ title: route.meta.title, path: route.path })
                }
            }
        },

        /* 删除历史记录 */
        delTabRoute(route:any){
            this.tabList = this.tabList.filter(item=>{
                return item.path != route.path
            })
            this.activeRoute = 'home'
        }
    },
    persist:{
        key: 'router',
        storage: sessionStorage,
        paths: ['activeRoute','tabList']
    }
})