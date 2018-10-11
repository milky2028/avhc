import Product from '@/types/product';

interface ProductState {
  activeProductName: string;
  products: Product[];
}

const ProductsModule = {
  namespaced: true,
  state: {
    products: [],
    activeProductName: ''
  },
  getters: {
    activeProduct: (state: ProductState): Product  => {
      return (state.products && state.activeProductName) ?
        state.products.find((product: Product) => product.name === state.activeProductName)! : state.products[0];
    }
  },
  mutations: {
    setProducts: (state: ProductState, payload: Product[]) => {
      state.products = payload;
    },
    setActiveProductName: (state: ProductState, payload: string) => {
      state.activeProductName = payload;
    }
  }
};

export default ProductsModule;
