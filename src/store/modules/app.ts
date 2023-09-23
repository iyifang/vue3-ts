import { defineStore } from "pinia";

export const useAppStore = defineStore('app',{
    state: ()=>{
        return{
            collapse: true,
            tabList: []
        }
    },
    actions: {
        changeCollapse(){
            this.collapse = !this.collapse
        },
        getCollapse(){
            return this.collapse
        }
    },
    persist:{
        key: 'appSetting',
        storage: sessionStorage
    }
})