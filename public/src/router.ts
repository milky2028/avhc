import Vue from 'vue';
import Router from 'vue-router';
const Intro = () => import('./views/Intro.vue');
const Orders = () => import('./views/Orders.vue');
const Checkout = () => import('./views/Checkout.vue');
const Shop = () => import('./views/Shop.vue');
const ThankYou = () => import('./views/ThankYou.vue');
const About = () => import('./views/About.vue');
const TestResults = () => import('./views/TestResults.vue')


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/test-results',
      name: 'test-results',
      component: TestResults,
    }
  ]
});
