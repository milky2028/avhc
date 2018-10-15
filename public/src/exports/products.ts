import Product from '@/types/product';
import { db } from '@/exports/firebase';
import * as Sentry from '@sentry/browser';

const Products = async (): Promise<Product[]> => {
  try {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map((doc: any) => doc.data());
  } catch (e) {
    Sentry.captureException(e);
    throw e;
  }
};

export default Products;
