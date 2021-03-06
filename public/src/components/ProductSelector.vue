<template>
    <div id='product-selector-root'>
        <div class='select-wrapper'>
            <label for="product-select">Product</label>
            <div class='select-container'>
                <select id="product-select" v-model='selectedProductName' @input='setProduct($event.target)'>
                <option value='' disabled selected>Select a Product</option>
                <option v-for='product of products' :key='product.name' :value='product.name'>{{ product.title }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
        </div>
        <div id='lower-select-container'>
        <div id='left-select' class='select-wrapper half-width' :style="sizeDynamicStyle">
            <label for="size-select">Size</label>
            <div class='select-container'>
                <select id="size-select" class='lower-selector' v-model='selectedProductSize' @input="setSelectedProductSize(+$event.target.value)">
                <option value='' disabled selected>Size</option>
                <option v-for='size of activeProduct.sizes' :key='size.index' :value='size.index'>{{ size.sizeValue }}{{ size.measurement }}</option>
            </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
            </div>
        </div>
        <div id='right-select' v-if="activeProduct && activeProduct.strains.length > 0" class='select-wrapper half-width'>
            <label for="strain-select">Strain</label>
            <div class='select-container strain'>
                <select id="strain-select" class='lower-selector' v-model='selectedProductStrain'>
                <option value='' disabled selected>Strain</option>
                <option v-for='strain of activeProduct.strains' :key='strain.name' :value='strain.name'>{{ strain.title }}</option>
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
  align-self: center;
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
import { Vue, Component, Watch } from 'vue-property-decorator';
import EventBus from '@/exports/EventBus';
import CartItem from '@/types/CartItem';
import { mapMutations, mapState, mapGetters } from 'vuex';
import Product from '@/types/Product';
import CreateRandomId from '@/exports/CreateRandomId';

interface InputEventTarget extends EventTarget {
  value: string;
}

@Component({
  computed: {
    ...mapState('products', [
      'products'
    ]),
    ...mapGetters('products', [
      'activeProduct',
    ])
  },
  methods: {
    ...mapMutations('products', [
      'setActiveProductName',
      'clearSizeIndex',
      'setSelectedProductSize'
    ]),
    ...mapMutations('cart', [
      'addItemToCart',
      'clearQuantity'
    ])
  }
})
export default class ProductSelector extends Vue {
  public selectedProductSize = '';
  public selectedProductStrain = '';
  public selectedProductName = '';
  public activeProduct!: Product;
  public products!: Product[];
  private setActiveProductName!: (payload: string) => void;
  private clearSizeIndex!: () => void;
  private setSelectedProductSize!: (payload: number) => void;
  private addItemToCart!: (item: CartItem) => void;
  private clearQuantity!: () => void;
  private createRandomId = CreateRandomId;

  @Watch('$route') private onRouteChange() {
    this.selectedProductName = (this.$route.params.productName) ? this.$route.params.productName : '';
    this.selectedProductSize = '';
    this.selectedProductStrain = '';
  }

  private beforeMount() {
    this.clearSizeIndex();
    this.selectedProductName = (this.$route.params.productName) ? this.$route.params.productName : '';
    this.setActiveProductName(this.selectedProductName);

    EventBus.$on('addToCart', () => {
      const item = {
        id: this.createRandomId(15),
        price: (this.selectedProductSize) ?
          this.activeProduct.sizes[this.$store.state.products.selectedSizeIndex].price : this.activeProduct.price,
        quantity: this.$store.state.cart.tempQuantity,
        product: this.activeProduct.name,
        size: (this.selectedProductSize) ?
          `${this.activeProduct.sizes[+this.selectedProductSize].sizeValue}${this.activeProduct.sizes[0].measurement}` :
          `${this.activeProduct.sizes[0].sizeValue}${this.activeProduct.sizes[0].measurement}`,
        strain: (this.selectedProductStrain) ? this.selectedProductStrain : (this.activeProduct.strains.length > 0) ? this.activeProduct.strains[0].name : ''
      };
      this.addItemToCart(item);
      this.clearQuantity();
    });
  }

  private beforeDestroy() {
    EventBus.$off();
  }

  private setProduct(event: InputEventTarget) {
    const clickValue: string = event.value;
    this.setActiveProductName(clickValue);
    this.$router.push(`/shop/${clickValue}`);
    this.selectedProductSize = '';
    this.selectedProductStrain = '';
    return this.selectedProductName;
  }

  private get sizeDynamicStyle() {
    return (this.activeProduct.strains.length > 0) ? {} : { width: '100%' };
  }
}
</script>
