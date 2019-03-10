import CartItem from './CartItem';
import CouponCode from './CouponCode';

export default interface Order {
    errors: string[];
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
    fullCoupon: CouponCode;
    couponCode?: string;
    password?: string;
    items: CartItem[];
    orderTotal: number;
    userId: string;
    orderDay: string;
    orderTime: string;
    orderStatus?: 'Processing' | 'Shipped';
    trackingNumber?: string;
    [key: string]: any;
}
