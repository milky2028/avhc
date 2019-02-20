import Order from '@/types/Order';
import Module from '@/types/Module';
import { Firestore } from '@/exports/Firebase';
import { Commit } from 'vuex';

const PastOrdersModule: Module = {
  namespaced: true,
  state: {
    orders: []
  },
  mutations: {
    setOrders: (state: Order, payload: Order[]) => state.orders = payload
  },
  actions: {
    getOrders: async ({ commit, rootState }: { commit: Commit, rootState: any }) => {
      const db = await Firestore();
      db.collection('orders')
      .where('userId' , '==', rootState.user.user.uid)
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc: any) => doc.data());
        commit('setOrders', orders);
      });
    }
  }
};

export default PastOrdersModule;
