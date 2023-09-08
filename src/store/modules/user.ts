import { defineStore } from 'pinia'
import { DataInfo } from '@/utils/auth'
import { removeToken, setToken } from '@/utils/cookie'

export const useUserStore = defineStore('user',{
    state: ()=>{
        return{
            userInfo: {},
            roles: [] as Array<number>
        }
    },
    actions: {
        login(user: DataInfo){
            return new Promise((resolve)=>{
                this.userInfo = user
                this.roles = user.roles ? user.roles : []
                setToken(user.token)
                resolve(user)
            })
        },
        logout(){
            sessionStorage.removeItem('user-info')
            sessionStorage.removeItem('user-router')
            removeToken()
        }
    },
    persist:{
        /* 默认名称为当前store唯一标识 这里即user */
        key: 'user-info',
        /* 默认localStorage 本地储存 */
        /* 这里建议临时储存sessionStorage 也可写成window.sessionStorage */
        storage: sessionStorage,
        /* 默认当前store里的所有变量都持久化 */
        // paths: ['userInfo']
    }
})