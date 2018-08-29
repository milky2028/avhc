<template>
    <div id="descriptions-root" v-html="products.state.activeProduct.description"></div>
</template>

<style lang="scss">
@import '../styles/theme.scss';

#descriptions-root {
    grid-area: product-description;
    font-size: 16px;
    font-family: $secondary-font;
    padding: 12px 22px;
    line-height: 130%;
}

.product-header {
    font-size: 16px;
    font-weight: bold;
}

.bullet-header {
    margin-top: 10px;
    margin-bottom: 5px;
}

.list {
    list-style: inside;
    font-size: 16px;
    line-height: 130%;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductsExport from '@/exports/products.export';

@Component
export default class ProductDescriptions extends Vue {
    private products = ProductsExport;
    /* tslint:disable */
    private mockHTML = `<h2 class="product-header">Product Info Header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac leo mi. Maecenas ornare mauris quis neque bibendum, molestie iaculis enim varius. Ut quis rutrum lorem. Ut venenatis, metus sed congue rhoncus.</p>
    <h2 class="product-header bullet-header">Secondary Header</h2>
    <ul class="list">
        <li>Bullet about the prodouct.</li>
        <li>Another Bullet about the prodouct.</li>
        <li>Perhaps a third.</li>
    </ul>`;
    /* tslint:enable */
}
</script>


