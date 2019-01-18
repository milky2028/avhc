import Product from '@/types/Product';
import { firestore } from '@/exports/Firebase';
import * as Sentry from '@sentry/browser';

const Products = async (): Promise<Product[]> => {
  try {
    const db = await firestore();
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map((doc: any) => doc.data());
  } catch (e) {
    Sentry.captureException(e);
    throw e;
  }
};

export default Products;
