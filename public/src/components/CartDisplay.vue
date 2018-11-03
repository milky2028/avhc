<template>
    <div id="cart-display-root">
        <h2>Cart</h2>
        <div class="divider"></div>
        <div>
            <cart-item v-for="item in cart" :key="item.id" :cartItem="item"></cart-item>
        </div>
        <div id="tax" class="split-container">
            <h2>Tax</h2>
            <div>
                <h2>10.70%</h2>
                <h2>$69.99</h2>
            </div>
        </div>
        <div id="divider-2" class="divider"></div>
        <div class="split-container">
            <h2>Total</h2>
            <h2>$69.99</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-display-root {
    padding: 26px 0 26px 26px;
}

h2 {
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    font-size: 28px;
}

.divider {
    margin: 10px 0;
    background-color: black;
    height: 2px;
}

.split-container {
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

#tax {
    padding: 26px 26px 0 0;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CartItem from '@/components/CartItem.vue';

@Component({
    components: {
        CartItem
    }
})
export default class CartDisplay extends Vue {
    private get cart() {
        return this.$store.state.cart.cart;
    }
}
</script>

