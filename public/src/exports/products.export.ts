import Vue from 'vue';
import { firestore } from '@/exports/firebase';
import Product from '@/types/product';

interface ProductsExport {
    debug: boolean;
    state: {
        products: Product[];
        activeProduct?: any;
    };
    getProducts: () => Promise<void>;
    setActiveProduct: (product: Product) => void;
    clearProducts: () => void;
}

const ProductsExport: any = {
    debug: true,
    state: {
      products: [],
      activeProduct: { description: 'Warble' },
    },
    async getProducts(): Promise<void> {
        try {
            const snapshot = await firestore.collection('products').get();
            snapshot.forEach((doc: any) => this.state.products.push(doc.data()));
        } catch (e) {
            // TODO add helper that logs errors to cloud firestore
            // console.error(e);
        }
    },
    setActiveProduct(activeProductName: any) {
        const activeProduct = this.state.products.find((product: any) => product.name === activeProductName)
        for (const key in activeProduct) {
            if (activeProduct) {
                Vue.set(this.state.activeProduct, key, activeProduct[key]);
            }
        }
    },
    clearProducts() {
        this.state.products = [];
    }
};

export default ProductsExport;
