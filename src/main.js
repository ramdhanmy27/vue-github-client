import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common = {
  Accept: 'application/vnd.github.inertia-preview+json',
};

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
