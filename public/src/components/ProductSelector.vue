<template>
    <div id="root">
        <p :class="removeClassIos">Product</p>
        <div id="select-container">
            <select v-model="selectedProductName" @input="setProduct($event)">
                <option value="" disabled selected>Select a Product</option>
                <option v-for="product in products.state.products" :key="product.name" :value="product.name">{{ product.title }}</option>
            </select>
            <div class="mat-icon small-icon">keyboard_arrow_right</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#root {
    padding: 16px 22px;
    grid-area: product-selector;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

#select-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
