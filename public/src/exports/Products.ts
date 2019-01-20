import Product from '@/types/Product';
import * as Sentry from '@sentry/browser';
import Store from '@/store';

const store: any = Store;

const Products = async (): Promise<Product[]> => {
  try {
    const db = store.state.firebase.firestore;
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map((doc: any) => doc.data());
  } catch (e) {
    Sentry.captureException(e);
    throw e;
  }
};

export default Products;
