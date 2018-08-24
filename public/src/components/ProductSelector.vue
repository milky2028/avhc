<template>
    <div id="root">
        <div class="select-wrapper">
            <p :class="removeClassIos">Product</p>
            <div class="select-container">
                <select v-model="selectedProductName" @input="setProduct($event)">
                <option value="" disabled selected>Select a Product</option>
                <option v-for="product in products.state.products" :key="product.name" :value="product.name">{{ product.title }}</option>
            </select>
            <div class="mat-icon small-icon">keyboard_arrow_right</div>
            </div>
        </div>
        <div id="lower-select-container">
        <div id="left-select" class="select-wrapper half-width">
            <p :class="removeClassIos">Size</p>
            <div class="select-container">
                <select class="lower-selector" v-model="selectedProductName" @input="setProduct($event)">
                <option value="" disabled selected>Select Size</option>
                <option v-for="product in products.state.products" :key="product.name" :value="product.name">{{ product.title }}</option>
            </select>
            <div class="mat-icon small-icon">keyboard_arrow_right</div>
            </div>
        </div>
        <div class="select-wrapper half-width">
            <p :class="removeClassIos">Strain</p>
            <div class="select-container">
                <select class="lower-selector" v-model="selectedProductName" @input="setProduct($event)">
                <option value="" disabled selected>Select Size</option>
                <option v-for="product in products.state.products" :key="product.name" :value="product.name">{{ product.title }}</option>
            </select>
            <div class="mat-icon small-icon">keyboard_arrow_right</div>
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
    -webkit-appearance: none;
    color:  $primary;
    background-color: transparent;
    outline: transparent;
    font-size: 28px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.lower-selector {
    width: 80%;
}

@media (max-width: 340px) {
    select {
        width: 240px;
    }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductsExport from '@/exports/products.export';
import Product from '@/types/product';

declare var safari: any;
declare var window: any;

@Component
export default class ProductSelector extends Vue {
    public selectedProductName: Product | string = '';
    private products = ProductsExport;
    // private activeProduct = this.products.activeProduct;

    private created() {
        this.products.clearProducts();
        this.products.getProducts();
    }

    private setProduct(event: any) {
        const clickValue = event.target.value;
        this.setActiveProduct(clickValue);
        this.selectedProductName = clickValue;
        return this.selectedProductName;
    }

    private setActiveProduct(productName: any) {
        this.products.setActiveProduct(productName);
    }

    // private getProducts() {
    //     this.products.getProducts();
    // }

    // private clearProducts() {
    //     this.products.clearProducts();
    // }

    // private get activeProduct() {
    //     return this.productsState.state.products.find((product) => product.name === this.selectedProductName);
    // }

    /* tslint:disable */
    public get removeClassIos(): null | string {
        const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        return isSafari ? 'label' : null;
    }
    /* tslint:enable */
 }
</script>
