import Layout from '@/layout/index.vue'

export const router = [
    {
        path: '/map',
        meta: {
            title: '高德地图',
            roles: [0,1],
            icon: 'map'
        },
        redirect: '/map/puremap',
        component: Layout,
        children:[
            {
                path: '/map/pure-map',
                meta:{
                    title: '点位地图',
                    icon: 'gdmap',
                    roles: [0,1],
                },
                component:  ()=> import("@/view/map/pureMap.vue")
            },
            {
                path: '/map/trajectory-map',
                meta:{
                    title: '轨迹地图',
                    icon: 'gdmap',
                    roles: [0,1],
                },
                component:  ()=> import("@/view/map/trajectoryMap.vue")
            }
        ]
    }
]