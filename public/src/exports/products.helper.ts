import { firestore } from '@/exports/firebase';
import Product from '@/types/product';

interface ProductsHelper {
    products: Product[];
    activeProduct?: Product;
    getProducts: () => Promise<void>;
}

const ProductsHelper: ProductsHelper = {
    products: [],
    async getProducts(): Promise<void> {
        try {
            const snapshot = await firestore.collection('products').get();
            snapshot.forEach((doc: any) => this.products.push(doc.data()));
        } catch (e) {
            // TODO add helper that logs errors to cloud firestore
            // console.error(e);
        }
    }
};

export default ProductsHelper;
