import Layout from '@/layout/index.vue'

export const router = [
    {
        path: '/chart',
        meta: {
            title: '图表',
            roles: [0,1],
            icon: 'chart'
        },
        redirect: '/chart/line',
        component: Layout,
        children: [
            {
                path: '/chart/line',
                component: () => import("@/view/chart/line/index.vue"),
                meta: {
                    title: '折线图',
                    roles: [0,1],
                    icon: 'line'
                }
            },
            {
                path: '/chart/column',
                component: () => import("@/view/chart/column/index.vue"),
                meta: {
                    title: '柱状图',
                    roles: [0,1],
                    icon: 'column'
                }
            },
            {
                path: '/chart/pie',
                component: () => import("@/view/chart/pie/index.vue"),
                meta: {
                    title: '饼状图',
                    roles: [0,1],
                    icon: 'pie'
                }
            },
        ]
    }
]