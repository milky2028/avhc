<template>
    <div id='product-selector-root'>
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
        <div id='left-select' class='select-wrapper half-width' :style="sizeDynamicStyle">
            <p>Size</p>
            <div class='select-container'>
                <select class='lower-selector' v-model='selectedProductSize' @input="setProductSize($event.target)">
                <option value='' disabled selected>Size</option>
                <option v-for='size of sizes' :key='size.index' :value='size.index'>{{ size.sizeValue }}{{ size.measurement }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
        </div>
        <div id='right-select' v-if="strains.length > 0" class='select-wrapper half-width'>
            <p>Strain</p>
            <div class='select-container strain'>
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

#product-selector-root {
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

.strain > select, option.selected {
  width: 115px; 
  overflow: hidden; 
  white-space: nowrap;
  text-overflow: ellipsis;
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

@media (min-width: 1025px) {
  #product-selector-root {
    grid-area: image;
    align-self: end;
  }

  .select-wrapper {
    padding: 12px;
  }

  #lower-select-container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  #left-select { 
    border: none;
  }

  #right-select {
    border: none;
  }

  .half-width {
    width: 50%;
  }

  .strain > select, option.selected {
    width: 180px; 
  }
}
</style>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import EventBus from '@/exports/EventBus';
import CartItem from '@/types/CartItem';
import Products from '@/exports/Products';

interface InputEventTarget extends EventTarget {
  value: string;
}

@Component
export default class ProductSelector extends Vue {
  public selectedProductSize = '';
  public selectedProductStrain = '';
  public selectedProductName = '';

  private async beforeMount() {
    this.selectedProductName = (this.$route.params.productName) ? this.$route.params.productName : '';
    this.$store.commit('products/setActiveProductName', this.selectedProductName);
    this.$store.commit('products/setProducts', await Products());

    EventBus.$on('buyFlow', () => {
      const item: CartItem = {
        id: this.createId(),
        price: (this.selectedProductSize) ?
          this.activeProduct.sizes[this.$store.state.products.selectedSizeIndex].price : this.activeProduct.price,
        quantity: this.$store.state.cart.tempQuantity,
        product: this.activeProduct.name,
        size: (this.selectedProductSize) ?
          `${this.sizes[this.selectedProductSize].sizeValue}${this.sizes[0].measurement}` :
          `${this.sizes[0].sizeValue}${this.sizes[0].measurement}`,
        strain: (this.selectedProductStrain) ? this.selectedProductStrain : (this.strains) ? this.strains[0].name : ''
      };
      this.$store.commit('cart/addItemToCart', item);
      this.$store.commit('cart/clearQuantity');
    });

    EventBus.$on('addToCart', () => {
      const item: CartItem = {
        id: this.createId(),
        price: (this.selectedProductSize) ?
          this.activeProduct.sizes[this.$store.state.products.selectedSizeIndex].price : this.activeProduct.price,
        quantity: this.$store.state.cart.tempQuantity,
        product: this.activeProduct.name,
        size: (this.selectedProductSize) ?
          `${this.sizes[this.selectedProductSize].sizeValue}${this.sizes[0].measurement}` :
          `${this.sizes[0].sizeValue}${this.sizes[0].measurement}`,
        strain: (this.selectedProductStrain) ? this.selectedProductStrain : (this.strains.length > 0) ? this.strains[0].name : ''
      };
      this.$store.commit('cart/addItemToCart', item);
      this.$store.commit('cart/clearQuantity');
    });
  }

  private beforeDestroy() {
    EventBus.$off();
  }

  private setProduct(event: InputEventTarget) {
    const clickValue: string = event.value;
    this.$store.commit('products/setActiveProductName', clickValue);
    this.selectedProductSize = '';
    this.selectedProductStrain = '';
    return this.selectedProductName;
  }

  private setProductSize(event: InputEventTarget) {
    this.$store.commit('products/setSelectedProductSize', event.value);
  }

  private get sizeDynamicStyle() {
    return (this.strains.length > 0) ? {} : { width: '100%' };
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

  private createId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 9; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
</script>
