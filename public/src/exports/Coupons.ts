import * as Sentry from '@sentry/browser';
import CouponCode from '@/types/CouponCode';
import Store from '@/store';

const store: any = Store;

const Coupons = async (): Promise<CouponCode[]> => {
    try {
        const db = store.state.firebase.firestore;
        const snapshot = await db.collection('coupons').get();
        return snapshot.docs.map((doc: any) => doc.data());
    } catch (e) {
        Sentry.captureException(e);
        return [];
    }
};

export default Coupons;
