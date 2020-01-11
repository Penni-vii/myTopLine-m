import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 引入第三方包 设置rem的基准值
// 要先引入第三方的样式，再引入自己的样式，注意顺序问题，不然会出现自己写的样式被层叠掉的问题
import './utils/register-vant'
import '@/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
