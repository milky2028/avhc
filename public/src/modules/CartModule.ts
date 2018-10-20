import CartItem from '@/types/CartItem';

interface CartState {
    cart: CartItem[];
    shippingOptions: any[];
    quantity: number;
}

interface CartModule {
    namespaced?: boolean;
    state: CartState;
    getters?: any;
    mutations?: any;
    actions?: any;
}

interface QuantityPayload {
    uniqueId: number;
    quantity: number;
}

const CartModule: CartModule = {
    namespaced: true,
    state: {
        cart: [],
        shippingOptions: [],
        quantity: 0
    },
    getters: {
        total(state: CartState): number {
            let total: number = 0;
            state.cart.forEach((item: CartItem) => {
                total = 35; // total + (item.quantity * item.price);
            });
            return total;
        },
    },
    mutations: {
        increaseQuantity(state: CartState) {
            state.quantity++;
        },
        decreaseQuantity(state: CartState) {
            state.quantity--;
        },
        clearQuantity(state: CartState) {
            state.quantity = 0;
        },
        setShippingOptions(state: CartState, payload: PaymentShippingOption[]) {
            state.shippingOptions = payload;
        },
        addItemToCart(state: CartState, item: CartItem) {
            state.cart.push(item);
        }
    }
};

export default CartModule;
