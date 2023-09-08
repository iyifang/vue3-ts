import { createApp } from 'vue'
import App from './App.vue'
import { usePinia } from '@/store'
import  { initRouter } from '@/router/index'

// 引入进度条样式
import 'nprogress/nprogress.css'
import '@/style/index.scss'

import '@/router/permission'
import 'virtual:svg-icons-register'

const app = createApp(App)

usePinia(app)
initRouter(app)



app.mount('#app')
