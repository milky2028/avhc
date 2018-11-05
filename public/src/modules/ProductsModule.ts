import Product from '@/types/Product';

interface ProductState {
  activeProductName: string;
  products: Product[];
  selectedSizeIndex: number;
}

const ProductsModule = {
  namespaced: true,
  state: {
    products: [],
    activeProductName: '',
    selectedSizeIndex: 0
  },
  getters: {
    activeProduct: (state: ProductState): Product  => {
      return (state.products && state.activeProductName) ?
        state.products.find((product: Product) => product.name === state.activeProductName)! : state.products[0];
    }
  },
  mutations: {
    clearSizeIndex: (state: ProductState) => {
      state.selectedSizeIndex = 0;
    },
    setProducts: (state: ProductState, payload: Product[]) => {
      state.products = payload;
    },
    setActiveProductName: (state: ProductState, payload: string) => {
      state.activeProductName = payload;
    },
    setSelectedProductSize: (state: ProductState, payload: number) => {
      state.selectedSizeIndex = payload;
    }
  }
};

export default ProductsModule;
