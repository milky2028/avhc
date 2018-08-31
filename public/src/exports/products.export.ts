import { Vue } from 'vue-property-decorator';
import { firestore } from '@/exports/firebase.export';
import Product from '@/types/product';
import Raven from 'raven-js';

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
            Raven.captureException(e);
        }
    },
    setActiveProduct(activeProductName: string): void {
        const activeProduct = this.state.products.find((product: any) => product.name === activeProductName);
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
