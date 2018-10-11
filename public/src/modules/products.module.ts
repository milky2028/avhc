import Product from '@/types/product';
import Products from '@/exports/products';

interface LocalState {
  activeProductName: string;
  products: Product[];
  activeProduct: Product;
}

const ProductsModule = {
  namespaced: true,
  state: {
    products: [],
    activeProductName: ''
  },
  getters: {
    activeProduct: (state: LocalState) => {
      return (state.products && state.activeProductName) ?
        state.products.find((product: Product) => product.name === state.activeProductName) : {};
    }
  },
  mutations: {
    setProducts: (state: LocalState, payload: Product[]) => {
      state.products = payload;
    },
    setActiveProductName: (state: LocalState, payload: string) => {
      state.activeProductName = payload;
    }
  }
};

export default ProductsModule;
