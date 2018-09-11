import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import '@/registerServiceWorker';

Vue.config.productionTip = true;
Raven.config('https://362776d26eaf4ef4a02da8d50efc9072@sentry.io/1271986')
    .addPlugin(RavenVue, Vue)
    .install();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
