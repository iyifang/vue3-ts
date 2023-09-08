import { RouteRecordRaw } from "vue-router";


/* 一维数组处理成多级嵌套 */
function formatTwoStageRoutes(routesList: RouteRecordRaw[]){
    if(routesList.length === 0) return routesList
    const newRoutesList: RouteRecordRaw[] = [];
    routesList.forEach((v: RouteRecordRaw)=>{
        if(v.path === '/'){
            newRoutesList.push({
                component: v.component,
                name: v.name,
                path: v.path,
                redirect: v.redirect,
                meta: v.meta,
                children: []
            })
        }else{
            newRoutesList[0]?.children?.push({...v})
        }
    })
    return newRoutesList;
}

export {
    formatTwoStageRoutes
}