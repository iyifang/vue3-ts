import Layout from '@/layout/index.vue'
export const router ={
    path: "/user",
    redirect: '/user/index',
    meta: {
        title: '权限管理',
        roles: [0],
        icon: 'setting'
    },
    component: Layout,
    children: [
        {
            path: '/user/index',
            component: () => import("@/view/settings/users/index.vue"),
            meta: {
                title: '用户列表',
                roles: [0],
                icon: 'users'
            }
        },
        {
            path: '/system/index',
            component: () => import("@/view/settings/system/index.vue"),
            meta: {
                title: '权限列表',
                roles: [0],
                icon: 'setting'
            }
        }
    ],
} as RouteConfigsTable