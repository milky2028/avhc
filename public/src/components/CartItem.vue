<template>
    <div id="cart-item-root">
        <div id="cart-image"></div>
        <h3>{{ cartItem.title }}</h3>
        <div id="quantity-container">
            <h3>Quantity</h3>
            <select v-model="selectedQuantity">
                <option v-for="option of options" :key="option">{{ option}}</option>
            </select>
            <h3 id="price">{{ (selectedQuantity) }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-item-root {
    font-family: $secondary-font;
    font-weight: 600;
    padding: 26px 26px 0 0;
    font-size: 22px;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 30px 30px;
    grid-template-areas:
        "image title"
        "image details"
}

#cart-image {
    width: 80px;
    height: 60px;
    background-color: red;
}

h3 {
    padding: 0 12px;
}

select {
    margin-top: -9px;
}

#quantity-container {
    grid-area: details;
    display: flex;
    width: 100%;
    justify-content: space-between;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Product from '@/types/Product';

@Component
export default class CartItem extends Vue {
    @Prop() private cartItem!: Product;
    private selectedQuantity = 0;
    private options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    private beforeMount() {
        this.selectedQuantity = this.cartItem.quantity!;
    }

    private get currentProduct(): Product {
        return this.$store.state.products.products.find((product: Product) => product.name === this.cartItem.product)
    }
}
</script>

