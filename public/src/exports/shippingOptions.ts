import { db } from './Firebase';
import * as Sentry from '@sentry/browser';

const ShippingOptions = async () => {
    try {
        const snapshot = await db.collection('shipping-options').get();
        return snapshot.docs.map((doc: any) => doc.data());
    } catch (e) {
        Sentry.captureException(e);
        return [];
    }
};

export default ShippingOptions;
