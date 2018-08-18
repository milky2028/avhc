import { Component, Vue } from 'vue-property-decorator';
import db from '@/exports/firebase';
import Product from '@/types/product';

@Component
export default class ProductsMixin extends Vue {
    public products: Product[] = [];
    public activeProduct = 'Pizza';

    public async getProducts(): Promise<void> {
        try {
            const snapshot = await db.collection('products').get();
            snapshot.forEach((doc: any) => this.products.push(doc.data()));
        } catch (e) {
            // TODO add Mixin that logs errors to cloud firestore
            // console.error(e);
        }
    }
}
