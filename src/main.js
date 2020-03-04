import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

import { routes } from './routes';
import { store } from './store/store';

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  el: '#app',
  router, // ES6 Syntax
  store,
  render: h => h(App)
})