import { router } from './index'
import { useUserStore } from '@/store/modules/user'
import { useRouterStore } from '@/store/modules/router'
import { getToken } from '@/utils/cookie'


// 引入进度条
import nprogress from 'nprogress'

/* 路由白名单 */
const whiteList = ['/login']

/* 每个if中必须有一个next()或者retur true;放行,否则会死循环 */
router.beforeEach(async ( to, _, next )=>{
    const token = getToken()
    if(token){
        if(whiteList.includes(to.path)){
            next({path: '/'})
        }else{
            const userStore = useUserStore()
            const routerStore = useRouterStore()
            if(JSON.stringify(userStore.userInfo) !== '{}'){
                if(routerStore.routes.length === 0){
                    /* 获取角色路由 */
                    const authAsyncRouter = await routerStore.filterAsyncRouter(userStore.roles)
                    authAsyncRouter.forEach(item=>{
                        router.addRoute('layout',item)
                    })
                    next({ ...to, replace: true })
                }else{
                    next()
                }
            }else{
                next({path: '/login'})
            }
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next({path: '/login'})
        }
    }

})


router.afterEach(() => {
    nprogress.done();
});
