import CartItem from '@/types/CartItem';

interface CartState {
    cart: CartItem[];
    shippingOptions: any[];
    tempQuantity: number;
    tempPrice: number;
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
        tempQuantity: 0,
        tempPrice: 0
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
        increaseQuantity(state: CartState) {
            state.tempQuantity++;
        },
        decreaseQuantity(state: CartState) {
            state.tempQuantity--;
        },
        clearQuantity(state: CartState) {
            state.tempQuantity = 0;
        },
        setShippingOptions(state: CartState, payload: PaymentShippingOption[]) {
            state.shippingOptions = payload;
        },
        addItemToCart(state: CartState, item: CartItem) {
            const productsInCart = state.cart.map((productInCart: CartItem) => productInCart.product);
            if (productsInCart.includes(item.product)) {
                const duplicatedProduct = state.cart.find((cartItem) => cartItem.product === item.product)!;
                duplicatedProduct.quantity += item.quantity;
            } else {
                state.cart.push(item);
            }
        }
    }
};

export default CartModule;
