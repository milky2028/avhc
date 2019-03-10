import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import * as Sentry from '@sentry/browser';

Vue.config.productionTip = true;
Sentry.init({
  dsn: 'https://362776d26eaf4ef4a02da8d50efc9072@sentry.io/1271986',
  integrations: [new Sentry.Integrations.Vue({ Vue })],
  beforeSend: (event) => {
    const mode = process.env.NODE_ENV;
    if (mode !== 'production') {
      // tslint:disable-next-line
      console.error(event.exception!.values![0]);
      return event;
    } else {
      return event;
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
