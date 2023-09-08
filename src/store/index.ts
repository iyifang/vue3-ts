import { App } from 'vue'
import { createPinia } from 'pinia'
/* 持久化插件 */
import piniaPluginPersist from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersist)
export function usePinia(app:App<Element>){
    app.use(store)
}