<template>
    <div id="root">
        <div class="select-wrapper">
            <p :class="removeClassIos">Product</p>
            <div class="select-container">
                <select v-model="selectedProductName" @input="setProduct($event)">
                <option value="" disabled selected>Select a Product</option>
                <option v-for="product of products.state.products" :key="product.name" :value="product.name">{{ product.title }}</option>
            </select>
            <div class="mat-icon small-icon arrow-icon">keyboard_arrow_right</div>
            </div>
        </div>
        <div id="lower-select-container">
        <div id="left-select" class="select-wrapper half-width">
            <p :class="removeClassIos">Size</p>
            <div class="select-container">
                <select class="lower-selector" v-model="selectedProductSize">
                <option value="" disabled selected>Size</option>
                <option v-for="size of sizes" :key="size.index" :value="size.value">{{ size.value }}{{ size.measurement }}</option>
            </select>
            <div class="mat-icon small-icon arrow-icon">keyboard_arrow_right</div>
            </div>
        </div>
        <div class="select-wrapper half-width">
            <p :class="removeClassIos">Strain</p>
            <div class="select-container">
                <select class="lower-selector" v-model="selectedProductStrain">
                <option value="" disabled selected>Strain</option>
                <option v-for="strain of strains" :key="strain.name" :value="strain.name">{{ strain.title }}</option>
            </select>
            <div class="mat-icon small-icon arrow-icon">keyboard_arrow_right</div>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    color:  $primary;
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
    grid-template-areas: 'main'
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

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import ProductsExport from '@/exports/products.export';
import Product from '@/types/product';

declare var safari: any;
declare var window: any;

@Component
export default class ProductSelector extends Vue {
    // @Watch('activeProduct', { immediate: true, deep: true })
    // onProductChange(val: any, oldVal: any) {
    //     console.log(val);
    //     console.log(oldVal);
    // }
    public selectedProductName: Product | string = '';
    public selectedProductSize: string = '';
    public selectedProductStrain: string = '';
    private products = ProductsExport;

    private created() {
        this.products.clearProducts();
        this.products.getProducts();
    }

    private setProduct(event: any) {
        const clickValue = event.target.value;
        this.products.setActiveProduct(clickValue);
        this.selectedProductSize = '';
        this.selectedProductStrain = '';
        return this.selectedProductName;
    }

    private get activeProduct() {
        return this.products.state.activeProduct;
    }

    get strains() {
        return this.activeProduct.strains;
    }

    get sizes() {
        return this.activeProduct.sizes;
    }

    /* tslint:disable */
    public get removeClassIos(): null | string {
        const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        return isSafari ? 'label' : null;
    }
    /* tslint:enable */
 }
</script>
