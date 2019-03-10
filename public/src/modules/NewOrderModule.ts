import Order from '@/types/Order';
import Module from '@/types/Module';
import { Firestore } from '@/exports/Firebase';
import CreateRandomId from '@/exports/CreateRandomId';
import { Commit } from 'vuex';
import CartItem from '@/types/CartItem';
import router from '@/router';
import { FormatJsDate, FormatJsTimestamp } from '@/exports/DateFunctions';
import CouponCode from '@/types/CouponCode';

export interface SetOrderFieldPayload {
  key: string;
  value: string | number | CartItem[];
}

const NewOrderModule: Module = {
  namespaced: true,
  state: {
    errors: [],
    orderDay: null,
    orderTime: null,
    orderId: CreateRandomId(8),
    email: '',
    shippingName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: 0,
    shippingCountry: '',
    phoneNumber: '',
    shippingMethod: '',
    billingName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: 0,
    billingCountry: '',
    nameOnCard: '',
    cardNumber: 0,
    expirationMonth: 0,
    expirationYear: 0,
    cvv: 0,
    couponCode: '',
    fullCoupon: null,
    password: '',
    items: [],
    orderTotal: 0,
    userId: '',
    orderStatus: 'Processing',
    trackingNumber: ''
  },
  mutations: {
    setOrderField: (state: Order, payload: SetOrderFieldPayload) =>
      (state[payload.key] = payload.value),
    setUserId: (state: Order, payload: string) => state.userId = payload,
    pushError: (state: Order, payload: string) => state.errors.push(payload),
    clearErrors: (state: Order) => state.errors = []
  },
  getters: {
    fullCoupon: (state: Order, getters: any, rootState: any) =>
      rootState.cart.coupons.find(
        (coop: CouponCode) => coop.code === state.couponCode
      )
  },
  actions: {
    createOrder: async ({ state, commit, getters, rootState }: { state: Order; commit: Commit; getters: any; rootState: any; }) => {
      commit('setOrderField', { key: 'orderDay', value: FormatJsDate(new Date()) });
      commit('setOrderField', { key: 'orderTime', value: FormatJsTimestamp(new Date()) });
      commit('setOrderField', { key: 'items', value: rootState.cart.cart });
      commit('setOrderField', { key: 'fullCoupon', value: getters.fullCoupon });

      const requiredFields = [
        'email',
        'shippingName',
        'shippingAddress',
        'shippingCity',
        'shippingState',
        'shippingZip',
        'shippingCountry',
        'phoneNumber',
        'shippingMethod',
        'nameOnCard',
        'cardNumber',
        'expirationMonth',
        'expirationYear',
        'cvv',
        'items'
      ];
      commit('clearErrors');
      Object.keys(state).forEach((key: string) => {
        if (requiredFields.includes(key) && !state[key]) {
          commit('pushError', key);
        }
      });

      if (rootState.user.user) {
        commit('setUserId', rootState.user.user.uid);
      }

      if (state.errors.length > 0) {
        window.scrollTo(0, 0);
      } else {
        const db = await Firestore();
        db.collection('orders').add(state);
        commit('cart/clearCart', null, { root: true });
        router.push('/orders');
      }
    }
  }
};

export default NewOrderModule;
