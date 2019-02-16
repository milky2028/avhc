import CartItem from './CartItem';

export default interface Order {
    orderId: string;
    email: string;
    shippingName: string;
    shippingAddress: string;
    shipingCity: string;
    shippingState: string;
    shippingZip: number;
    shippingCountry: string;
    phoneNumber?: string;
    shippingMethod: string;
    sameBillingAddress?: boolean;
    billingName: string;
    billingAddress: string;
    billingCity: string;
    billingState: string;
    billingZip: number;
    billingCountry: string;
    nameOnCard: string;
    cardNumber: number;
    expirationMonth: number;
    expirationYear: number;
    cvv: number;
    couponCode?: string;
    password?: string;
    items: CartItem[];
    orderTotal: number;
    userId: string;
    [key: string]: any;
}
