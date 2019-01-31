import CartItem from '@/types/CartItem';
import CouponCode from '@/types/CouponCode';
import Module from '@/types/Module';
import * as Sentry from '@sentry/browser';


export interface CartState {
    cart: CartItem[];
    shippingOptions: any[];
    tempQuantity: number;
    tempPrice: number;
    coupons: CouponCode[];
}

interface CartModule extends Module {
    state: CartState;
    actions: {
        getShippingOptions: (context: { commit: any, rootState: any }) => Promise<void>
    };
}

interface QuantityPayload {
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
        computedQuantity(state: CartState) {
            if (state.cart.length > 0) {
                const cartQuantities = state.cart.map((item: CartItem) => item.quantity);
                return cartQuantities.reduce((a: number, b: number) => a + b, 0);
            } else {
                return 0;
            }
        },
        subtotal(state: CartState): number {
            let total: number = 0;
            state.cart.forEach((item: CartItem) => {
                total += (item.quantity * item.price);
            });
            return total;
        },
    },
    mutations: {
        increaseQuantity: (state: CartState) => state.tempQuantity++,
        decreaseQuantity: (state: CartState) => state.tempQuantity--,
        clearQuantity: (state: CartState) => state.tempQuantity = 0,
        setQuantity(state: CartState, payload: QuantityPayload) {
            const cartItem = state.cart.find((item: CartItem) => {
                return item.product === payload.productName && item.size === payload.size && item.strain === payload.strain;
            })!;
            cartItem.quantity = payload.quantity;
        },
        setCoupons: (state: CartState, payload: CouponCode[]) => state.coupons = payload,
        setShippingOptions: (state: CartState, payload: PaymentShippingOption[]) => state.shippingOptions = payload,
        addItemToCart(state: CartState, item: CartItem) {
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
        removeItemFromCart: (state: CartState, id: string) => state.cart = state.cart.filter((item) => item.id !== id)
    },
    actions: {
        getShippingOptions: async ({ commit, rootState }) => {
            try {
                const db = rootState.firebase.firestore;
                const snapshot = await db.collection('shipping-options').get();
                commit('setShippingOptions', snapshot.docs.map((doc: any) => doc.data()));
            } catch (e) {
                Sentry.captureException(e);
                throw e;
            }
        }
    }
};

export default CartModule;
