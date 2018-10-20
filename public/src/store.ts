import Vue from 'vue';
import Vuex from 'vuex';
import ProductsModule from '@/modules/ProductsModule';
import CartModule from '@/modules/CartModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
    cart: CartModule
  }
});
