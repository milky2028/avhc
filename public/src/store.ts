import Vue from 'vue';
import Vuex from 'vuex';
import ProductsModule from '@/modules/ProductsModule';
import CartModule from '@/modules/CartModule';
import OrderModule from './modules/OrderModule';
import FirebaseModule from './modules/FirebaseModule';
import UserModule from './modules/UserModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    firebase: FirebaseModule,
    products: ProductsModule,
    cart: CartModule,
    order: OrderModule,
    user: UserModule
  }
});
