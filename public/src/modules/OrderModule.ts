import Order from '@/types/Order';
import Module from '@/types/Module';
import { Firestore } from '@/exports/Firebase';
import CreateRandomId from '@/exports/CreateRandomId';
import { Commit } from 'vuex';

interface SetOrderPayload {
  key: string;
  value: any;
}

const OrderModule: Module = {
  namespaced: true,
  state: {
    orderId: CreateRandomId(22),
    email: '',
    shippingName: '',
    shippingAddress: '',
    shipingCity: '',
    shippingState: '',
    shippingZip: 0,
    shippingCountry: '',
    phone: '',
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
    userId: ''
  },
  mutations: {
    setOrderItem: (state: Order, payload: SetOrderPayload) => state[payload.key] = payload.value,
    setUserId: (state: Order, payload: string) => state.userId = payload
  },
  actions: {
    createOrder: async ({ state, commit, rootState }: { state: Order, commit: Commit, rootState: any }) => {
      commit('setUserId', rootState.user.user);
      const db = await Firestore();
      db.collection('orders').add(state);
    }
  }
};

export default OrderModule;
