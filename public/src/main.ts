import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import AppToolbar from '@/components/AppToolbar.vue';

Vue.config.productionTip = false;
Vue.component('app-toolbar', AppToolbar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
