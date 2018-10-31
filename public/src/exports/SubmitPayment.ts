import Store from '@/store';
import ShippingOptions from './ShippingOptions';
import * as Sentry from '@sentry/browser';
import { db } from './Firebase';
import router from '@/router';
import EncryptData from './EncryptData';

const store: any = Store;

const formatDate = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    return dtf.format(date);
  };

const formatTimestamp = (date: Date): string => {
    const dtf = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'short'
    });
    return dtf.format(date);
  };

const SubmitPayment = async () => {
    if ('PaymentRequest' in window) {
        const options: PaymentOptions = {
            requestPayerName: true,
            requestPayerEmail: true,
            requestShipping: true
          };
        const creditCard: PaymentMethodData = { supportedMethods: 'basic-card' };
        const supportedPaymentMethods: PaymentMethodData[] = [creditCard];
        store.commit('cart/setShippingOptions', await ShippingOptions());
        const paymentDetails = {
                total: {
                    label: 'Total',
                    amount: {
                        currency: 'USD',
                        value: store.getters['cart/total']
                    }
                },
                shippingOptions: store.state.cart.shippingOptions
            };
        const request: PaymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

        request.addEventListener('shippingaddresschange', (event: any) => {
            event.updateWith(paymentDetails);
        });

        request.addEventListener('shippingoptionchange', (event: any) => {
            const paymentRequestInstance = event.target;
            const selectedShippingOption = paymentRequestInstance.shippingOption;
            store.state.cart.shippingOptions.forEach((option: PaymentShippingOption) => {
                option.selected = option.id === selectedShippingOption;
            });
            event.updateWith(paymentDetails);
          });

        try {
            await request.canMakePayment();
            const paymentResponse: PaymentResponse = await request.show();
            await paymentResponse.complete('success');
            const order = {
                orderDay: formatDate(new Date()),
                orderTime: formatTimestamp(new Date()),
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
                    cardNumber: await EncryptData(paymentResponse.details.cardNumber),
                    cardSecurityCode: await EncryptData(paymentResponse.details.cardSecurityCode),
                    cardholderName: paymentResponse.details.cardholderName,
                    expiryMonth: paymentResponse.details.expiryMonth,
                    expiryYear: paymentResponse.details.expiryYear
                }
            };
            await db.collection('orders').add(order);
            router.push('/thank-you');
        } catch (e) {
            Sentry.captureException(e);
            router.push('/checkout');
        }
    } else {
        router.push('/checkout');
    }
};

export default SubmitPayment;
