import Order from '@/types/Order';
import Module from '@/types/Module';

interface SetOrderPayload {
    key: string;
    value: any;
}

const OrderModule: Module = {
    namespaced: true,
    state: {
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
        orderTotal: 0
    },
    mutations: {
        setOrderItem(state: Order, payload: SetOrderPayload) {
            state[payload.key] = payload.value;
        }
    }
};

export default OrderModule;
