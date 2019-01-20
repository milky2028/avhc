import * as Sentry from '@sentry/browser';
import ShippingMethod from '@/types/ShippingMethod';
import Store from '@/store';

const store: any = Store;

const ShippingOptions = async (): Promise<ShippingMethod[]> => {
    try {
        const db = store.state.firebase.firestore;
        const snapshot = await db.collection('shipping-options').get();
        return snapshot.docs.map((doc: any) => doc.data());
    } catch (e) {
        Sentry.captureException(e);
        return [];
    }
};

export default ShippingOptions;
