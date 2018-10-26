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
const Cart = () => import(/* webpackChunkName: "cart" */'./views/Cart.vue');
const Login = () => import(/* webpackChunkName: "login" */'./views/Login.vue');
const PrivacyPolicy = () => import(/* webpackChunkName: "privacyPolicy" */'./views/PrivacyPolicy.vue');
const TermsAndConditions = () => import(/* webpackChunkName: "termsAndConditions" */'./views/TermsAndConditions.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/flower',
      name: 'flower',
      component: Flower
    },
    {
      path: '/shop/:productName',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
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
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/test-results',
      name: 'test-results',
      component: TestResults,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions,
    }
  ]
});

