import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { intersection } from '@/utils/function'
import { baseRouter, routeModuleList, lastRoutes } from '@/router/index'

export const useRouterStore = defineStore('router',{
    state: ()=>{
        return{
            routes: [] as Array<RouteRecordRaw>
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
        }
    }
})