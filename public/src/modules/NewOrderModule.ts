import Order from '@/types/Order';
import Module from '@/types/Module';
import { Firestore } from '@/exports/Firebase';
import CreateRandomId from '@/exports/CreateRandomId';
import { Commit } from 'vuex';
import CartItem from '@/types/CartItem';
import router from '@/router';
import { FormatJsDate, FormatJsTimestamp } from '@/exports/DateFunctions';

export interface SetOrderFieldPayload {
  key: string;
  value: string | number | CartItem[];
}

const NewOrderModule: Module = {
  namespaced: true,
  state: {
    orderDay: null,
    orderTime: null,
    orderId: CreateRandomId(22),
    email: '',
    shippingName: '',
    shippingAddress: '',
    shipingCity: '',
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
    password: '',
    items: [],
    orderTotal: 0,
    userId: '',
    orderStatus: ''
  },
  mutations: {
    setOrderField: (state: Order, payload: SetOrderFieldPayload) => state[payload.key] = payload.value,
    setUserId: (state: Order, payload: string) => state.userId = payload
  },
  actions: {
    createOrder: async ({ state, commit, rootState }: { state: Order, commit: Commit, rootState: any }) => {
      commit('setOrderField', { key: 'orderDay', value: FormatJsDate(new Date())});
      commit('setOrderField', { key: 'orderTime', value: FormatJsTimestamp(new Date())});
      if (rootState.user.user) {
        commit('setUserId', rootState.user.user.uid);
      }
      const db = await Firestore();
      db.collection('orders').add(state);
      router.push('/orders');
    }
  }
};

export default NewOrderModule;
