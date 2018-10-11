import { db } from './firebase';
import Raven from 'raven-js';

const ShippingOptions = async () => {
    try {
        const snapshot = await db.collection('shipping-options').get();
        return snapshot.docs.map((doc: any) => doc.data());
    } catch (e) {
        Raven.captureException(e);
        return [];
    }
};

export default ShippingOptions;
