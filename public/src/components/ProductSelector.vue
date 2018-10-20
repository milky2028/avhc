<template>
    <div id='root'>
        <div class='select-wrapper'>
            <p>Product</p>
            <div class='select-container'>
                <select v-model='selectedProductName' @input='setProduct($event.target)'>
                <option value='' disabled selected>Select a Product</option>
                <option v-for='product of products' :key='product.name' :value='product.name'>{{ product.title }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
        </div>
        <div id='lower-select-container'>
        <div id='left-select' class='select-wrapper half-width'>
            <p>Size</p>
            <div class='select-container'>
                <select class='lower-selector' v-model='selectedProductSize'>
                <option value='' disabled selected>Size</option>
                <option v-for='size of sizes' :key='size.index' :value='size.value'>{{ size.value }}{{ size.measurement }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
        </div>
        <div class='select-wrapper half-width'>
            <p>Strain</p>
            <div class='select-container'>
                <select class='lower-selector' v-model='selectedProductStrain'>
                <option value='' disabled selected>Strain</option>
                <option v-for='strain of strains' :key='strain.name' :value='strain.name'>{{ strain.title }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@import '../styles/theme.scss';

#root {
  grid-area: product-selector;
  font-family: $secondary-font;
}

.label {
  margin-left: 5px;
  margin-bottom: -10px;
}

select {
  grid-area: main;
  width: 100%;
  -webkit-appearance: none;
  color: $primary;
  background-color: transparent;
  outline: transparent;
  font-size: 28px;
  z-index: 10;
}

.select-wrapper {
  padding: 12px 22px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.select-container {
  width: 100%;
  display: grid;
  grid-template-areas: 'main';
}

.half-width {
  width: calc(50% - 44px);
}

#left-select {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

#lower-select-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow-icon {
  grid-area: main;
  justify-self: end;
}
</style>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Product from '@/types/product';
import EventBus from '@/exports/eventBus';
import Products from '@/exports/products';
import CartItem from '@/types/cartItem';

interface InputEventTarget extends EventTarget {
  value: string;
}

@Component
export default class ProductSelector extends Vue {
  public selectedProductSize = '';
  public selectedProductStrain = '';

  public get selectedProductName() {
    return (this.$route.params) ? this.$route.params.productName : '';
  }

  private async beforeCreate() {
    this.$store.commit('products/setProducts', await Products());

    EventBus.$on('buyFlow', () => {
      const item: CartItem = {
        price: this.activeProduct.price,
        quantity: this.$store.state.cart.quantity,
        product: this.activeProduct.name,
        size: Number(this.selectedProductSize),
        strain: this.selectedProductStrain,
      };
      this.$store.commit('cart/addItemToCart', item);
      this.$store.commit('cart/clearQuantity');
    });
  }

  private setProduct(event: InputEventTarget) {
    const clickValue: string = event.value;
    this.$store.commit('products/setActiveProductName', clickValue);
    this.selectedProductSize = '';
    this.selectedProductStrain = '';
    return this.selectedProductName;
  }

  private shortenForDisplay(event: InputEventTarget) {
    return this.selectedProductStrain;
  }

  private get activeProduct() {
    return this.$store.getters['products/activeProduct'];
  }

  private get products() {
    return this.$store.state.products.products;
  }

  private get strains() {
    return this.activeProduct.strains;
  }

  private get sizes() {
    return this.activeProduct.sizes;
  }
}
</script>
