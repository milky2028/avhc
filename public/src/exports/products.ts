import Product from '@/types/product';
import { db } from '@/exports/firebase.export';
import Raven from 'raven-js';

const Products = async (): Promise<Product[] | undefined> => {
  try {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map((doc: any) => doc.data());
  } catch (e) {
    Raven.captureException(e);
  }
};

export default Products;
