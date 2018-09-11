import Raven from 'raven-js';
import Router from '../router';
import CartItem from '@/types/cartItem';
import { firestore } from './firebase.export';

declare var window: any;

const Cart: any = {
    state: {
        cart: [],
        shippingOptions: []
    },
    addItemToCart(cartId: number, product: string, strain: string, size: string): void {
        const item = {
            cartId,
            product,
            strain,
            size
        };
        this.state.cart.push(item);
    },
    addQuantityToCart(cartId: number, quantity: number): void {
        const cartItem = this.state.cart.find((item: CartItem) => item.cartId === cartId);
        cartItem.quantity = quantity;
    },
    get total(): number {
        let total: number = 0;
        this.state.cart.forEach((item: CartItem) => {
            total = 35; // total + (item.quantity * item.price);
        });
        return total;
    },
    async getShippingOptions(): Promise<PaymentShippingOption[]> {
        try {
            const snapshot = await firestore.collection('shipping-options').get();
            snapshot.forEach((doc: any) => this.state.shippingOptions.push(doc.data()));
        } catch (e) {
            Raven.captureException(e);
        }
        return this.state.shippingOptions;
    },
    async submitPayment(): Promise<void> {
        if (window.PaymentRequest) {
            const options: PaymentOptions = {
                requestPayerName: true,
                requestPayerEmail: true,
                requestShipping: true
              };
            const creditCard: PaymentMethodData = { supportedMethods: 'basic-card' };
            const supportedPaymentMethods: PaymentMethodData[] = [creditCard];
            const paymentDetails = {
                    total: {
                        label: 'Total',
                        amount: {
                            currency: 'USD',
                            value: this.total
                        }
                    },
                    shippingOptions: await this.getShippingOptions()
                };
            const request: PaymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

            request.addEventListener('shippingaddresschange', (event: any) => {
                event.updateWith(paymentDetails);
            });

            request.addEventListener('shippingoptionchange', (event: any) => {
                const paymentRequestInstance = event.target;
                const selectedShippingOption = paymentRequestInstance.shippingOption;
                this.state.shippingOptions.forEach((option: PaymentShippingOption) => {
                    option.selected = option.id === selectedShippingOption;
                });
                event.updateWith(paymentDetails);
              });

            try {
                const paymentResponse: PaymentResponse = await request.show();
                await paymentResponse.complete('success');
                const order = {
                    requestId: paymentResponse.requestId,
                    methodName: paymentResponse.methodName,
                    payerEmail: paymentResponse.payerEmail,
                    payerName: paymentResponse.payerName,
                    shippingOption: paymentResponse.shippingOption,
                    shippingAddress: {
                        addressLine: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.addressLine : '',
                        city: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.city : '',
                        country: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.country : '',
                        dependentLocality: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.dependentLocality : '',
                        languageCode: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.languageCode : 0 ,
                        organization: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.organization : '',
                        phone: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.phone : 0,
                        postalCode: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.postalCode : 0,
                        recepient: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.recipient : '',
                        region: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.region : '',
                        sortingCode: paymentResponse.shippingAddress ? paymentResponse.shippingAddress.sortingCode : 0
                    },
                    billingInformation: {
                        billingAddress: paymentResponse.details.billingAddress,
                        cardNumber: 'encrypt this somehow', // paymentResponse.details.cardNumber,
                        cardSecurityCode: 'encrypt this somehow', // paymentResponse.details.cardSecurityCode,
                        cardholderName: paymentResponse.details.cardholderName,
                        expiryMonth: paymentResponse.details.expiryMonth,
                        expiryYear: paymentResponse.details.expiryYear
                    }
                };
                await firestore.collection('orders').add(order);
                Router.push('/thank-you');
            } catch (e) {
                Raven.captureException(e);
            }
        } else {
            Router.push('/checkout');
        }
    }
};

export default Cart;
