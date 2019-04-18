import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import $ from 'jquery'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

axios.defaults.timeout = 5000

// axios.defaults.baseURL = '/api/'

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
