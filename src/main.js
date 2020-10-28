import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import ApiService from './services/api.service';
import { CHECK_AUTH } from "./store/actions.type";

Vue.prototype.$http = axios
Vue.config.productionTip = false

ApiService.init()

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
