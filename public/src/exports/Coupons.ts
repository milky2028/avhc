import { db } from './Firebase';
import * as Sentry from '@sentry/browser';

const Coupons = async () => {
    try {
        const snapshot = await db.collection('coupons').get();
        return snapshot.docs.map((doc: any) => doc.data());
    } catch (e) {
        Sentry.captureException(e);
        return [];
    }
};

export default Coupons;
