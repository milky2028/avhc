import Order from '@/types/Order';

interface SetOrderPayload {
    key: string;
    value: any;
}

const OrderModule = {
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
        orderTotal: ''
    },
    setOrderItem(state: Order, payload: SetOrderPayload) {
        state[payload.key] = payload.value;
    }
};

export default OrderModule;
