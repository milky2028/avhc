import Product from '@/types/Product';
import Module from '@/types/Module';
import * as Sentry from '@sentry/browser';
import { Commit } from 'vuex';
import { Firestore } from '@/exports/Firebase';

export interface ProductState {
  activeProductName: string;
  products: Product[];
  selectedSizeIndex: number;
}

interface ProductsModule extends Module {
  state: ProductState;
  getters: {
    activeProduct: (state: ProductState) => Product
  };
  mutations: {
    clearSizeIndex: (state: ProductState) => void;
    setProducts: (state: ProductState, payload: Product[]) => void;
    setActiveProductName: (state: ProductState, payload: string) => void;
    setSelectedProductSize: (state: ProductState, payload: number) => void;
  };
  actions: {
    getProducts: (context: { commit: Commit }) => Promise<void>;
  };
}

const ProductsModule: ProductsModule = {
  namespaced: true,
  state: {
    products: [],
    activeProductName: '',
    selectedSizeIndex: 0
  },
  getters: {
    activeProduct: (state): Product => {
      return (state.products.length > 0 && state.activeProductName) ?
        state.products.find((product: Product) => product.name === state.activeProductName)! : new Product();
    }
  },
  mutations: {
    clearSizeIndex: (state) => state.selectedSizeIndex = 0,
    setProducts: (state, payload) => state.products = payload,
    setActiveProductName: (state, payload) => state.activeProductName = payload,
    setSelectedProductSize: (state, payload) => state.selectedSizeIndex = payload
  },
  actions: {
    getProducts: async ({ commit }) => {
      try {
        const db = await Firestore();
        const snapshot = await db.collection('products').get();
        const products = snapshot.docs.map((doc: any) => doc.data());
        commit('setProducts', products);
      } catch (e) {
        Sentry.captureException(e);
        throw e;
      }
    }
  }
};

export default ProductsModule;
