import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wd2468178309upkmpi.wilddogio.com/'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
