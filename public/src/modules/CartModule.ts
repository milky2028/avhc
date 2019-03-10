import CartItem from '@/types/CartItem';
import CouponCode from '@/types/CouponCode';
import Module from '@/types/Module';
import * as Sentry from '@sentry/browser';
import { Firestore } from '@/exports/Firebase';
import { Commit } from 'vuex';

export interface CartState {
  cart: CartItem[];
  shippingOptions: any[];
  tempQuantity: number;
  tempPrice: number;
  coupons: CouponCode[];
}

interface CartModule extends Module {
  state: CartState;
  getters: {
    computedQuantity: (state: CartState) => number;
    subtotal: (state: CartState) => number;
  };
  mutations: {
    increaseQuantity: (state: CartState) => void;
    decreaseQuantity: (state: CartState) => void;
    clearQuantity: (state: CartState) => void;
    setQuantity: (state: CartState, payload: QuantityPayload) => void;
    setCoupons: (state: CartState, payload: CouponCode[]) => void;
    setShippingOptions: (state: CartState, payload: PaymentShippingOption[]) => void;
    clearCart: (state: CartState) => void;
    addItemToCart: (state: CartState, item: CartItem) => void;
    removeItemFromCart: (state: CartState, id: string) => void;
  };
  actions: {
    getShippingOptions: (context: { commit: Commit }) => Promise<void>
    getCoupons: (context: { commit: Commit }) => Promise<void>
  };
}

export interface QuantityPayload {
  productName: string;
  size: string;
  strain: string;
  quantity: number;
}

const CartModule: CartModule = {
  namespaced: true,
  state: {
    cart: [],
    shippingOptions: [],
    tempQuantity: 0,
    tempPrice: 0,
    coupons: []
  },
  getters: {
    computedQuantity(state) {
      if (state.cart.length > 0) {
        const cartQuantities = state.cart.map((item: CartItem) => item.quantity);
        return cartQuantities.reduce((a: number, b: number) => a + b, 0);
      } else {
        return 0;
      }
    },
    subtotal(state) {
      let total = 0;
      state.cart.forEach((item: CartItem) => {
        total += (item.quantity * item.price);
      });
      return total;
    }
  },
  mutations: {
    increaseQuantity: (state) => state.tempQuantity++,
    decreaseQuantity: (state) => state.tempQuantity--,
    clearQuantity: (state) => state.tempQuantity = 0,
    setQuantity(state, payload) {
      const cartItem = state.cart.find((item: CartItem) => {
        return item.product === payload.productName && item.size === payload.size && item.strain === payload.strain;
      })!;
      cartItem.quantity = payload.quantity;
    },
    setCoupons: (state, payload) => state.coupons = payload,
    setShippingOptions: (state, payload) => state.shippingOptions = payload,
    clearCart: (state) => {
      state.cart = [];
      window.localStorage.clear();
    },
    addItemToCart(state, item) {
      const productsInCart = state.cart.map((productInCart) => productInCart.product);
      const productSizesInCart = state.cart.map((productInCart) => productInCart.size);
      const strainsInCart = state.cart.map((productInCart) => productInCart.strain);
      if (productsInCart.includes(item.product) && productSizesInCart.includes(item.size) && strainsInCart.includes(item.strain)) {
        const duplicatedProduct = state.cart.find((cartItem) => cartItem.product === item.product)!;
        duplicatedProduct.quantity += item.quantity;
      } else {
        state.cart.push(item);
      }
      const localStorage = window.localStorage;
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItemFromCart: (state, id) => state.cart = state.cart.filter((item) => item.id !== id)
  },
  actions: {
    getShippingOptions: async ({ commit }) => {
      try {
        const db = await Firestore();
        const snapshot = await db.collection('shipping-options').get();
        const shippingOptions = snapshot.docs.map((doc: any) => doc.data());
        commit('setShippingOptions', shippingOptions);
      } catch (e) {
        Sentry.captureException(e);
        throw e;
      }
    },
    getCoupons: async ({ commit }) => {
      try {
        const db = await Firestore();
        const snapshot = await db.collection('coupons').get();
        const coupons = snapshot.docs.map((doc: any) => doc.data());
        commit('setCoupons', coupons);
      } catch (e) {
        Sentry.captureException(e);
        throw e;
      }
    }
  }
};

export default CartModule;
