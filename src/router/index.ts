import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'
import Layout from '@/layout/index.vue'
/* 引入modules文件夹下所有路由文件 */
const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

let routeModuleList: Array<RouteChildrenConfigsTable> = []

Object.values(modules).forEach((key: any) => {
  /* key.[keyname] 点后面如果模块导出是export default => key.default，否则是自定义导出名称 */
  const mod = key.router || []
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const baseRouter = [
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: ()=> import('@/view/login/index.vue'),
    },
    {
      path: '/',
      redirect: '/home/index',
      hidden: true,
    },
    {
      path: '/home/index',
      redirect: '/home/index',
      name: 'Home',
      meta: {
        title: '首页',
         roles: [1],
         icon: 'home'
      },
      showParent: false,
      component: Layout,
      children: [
        {
          path: '/home/index',
          meta: {
            title: '首页',
            roles: [1],
            icon: 'home'
          },
          component: () => import('@/view/home/index.vue')
        },
      ]
    }
]

/* 最后添加404页面 */
const lastRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    hidden: true,
    meta: {
      title: '404'
    },
    component: () => import('@/view/error/404.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRouter
})


// 暴露初始化路由方法
export const initRouter = (app:App<Element>)=>{
  app.use(router)
}

export {
  baseRouter,
  lastRoutes,
  routeModuleList
}