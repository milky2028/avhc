import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('./views/Home.vue');
const Orders = () => import('./views/Orders.vue');
const Checkout = () => import('./views/Checkout.vue');
const Item = () => import('./views/Item.vue');
const ThankYou = () => import('./views/ThankYou.vue');
const About = () => import('./views/About.vue');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      path: '/shop-prerolls',
      name: 'shop-prerolls',
      component: Item,
    },
  ],
});
