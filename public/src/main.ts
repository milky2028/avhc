import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import * as Sentry from '@sentry/browser';

Vue.config.productionTip = true;
const mode = process.env.NODE_ENV;
if (mode === 'production') {
  Sentry.init({
    dsn: 'https://362776d26eaf4ef4a02da8d50efc9072@sentry.io/1271986',
    integrations: [new Sentry.Integrations.Vue({ Vue })]
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
