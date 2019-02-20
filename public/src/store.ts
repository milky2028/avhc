import Vue from 'vue';
import Vuex from 'vuex';
import ProductsModule from '@/modules/ProductsModule';
import CartModule from '@/modules/CartModule';
import NewOrderModule from '@/modules/NewOrderModule';
import UserModule from '@/modules/UserModule';
import PastOrdersModule from '@/modules/PastOrdersModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
    cart: CartModule,
    newOrder: NewOrderModule,
    pastOrders: PastOrdersModule,
    user: UserModule
  }
});
