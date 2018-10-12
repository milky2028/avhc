import Vue from 'vue';
import Router from 'vue-router';
const Intro = () => import(/* webpackChunkName: "intro" */'./views/Intro.vue');
const Orders = () => import(/* webpackChunkName: "orders" */'./views/Orders.vue');
const Checkout = () => import(/* webpackChunkName: "checkout" */'./views/Checkout.vue');
const Shop = () => import(/* webpackChunkName: "shop" */'./views/Shop.vue');
const ThankYou = () => import(/* webpackChunkName: "thankYou" */'./views/ThankYou.vue');
const About = () => import(/* webpackChunkName: "about" */'./views/About.vue');
const TestResults = () => import(/* webpackChunkName: "testResults" */'./views/TestResults.vue');
const Flower = () => import(/* webpackChunkName: "flower" */'./views/Flower.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/flower',
      name: 'flower',
      component: Flower
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

