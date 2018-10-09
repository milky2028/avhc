import Vue from 'vue';
import Vuex from 'vuex';
import ProductsModule from '@/modules/products.module';
import CartModule from '@/modules/cart.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
    cart: CartModule
  }
});
