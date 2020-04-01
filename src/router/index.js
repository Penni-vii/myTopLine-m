import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login') // @ 是 src 目录的别名，这是 VueCLI 项目中特殊的提供的
  }
]

const router = new VueRouter({
  routes
})

export default router
