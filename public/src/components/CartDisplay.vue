<template>
    <div id="cart-display-root">
        <h2 v-if="cart.length < 1" id="empty-cart" :class="(isWhite) ? 'white-text' : ''">Your cart is empty.</h2>
        <div v-if="cart.length >= 1">
            <h2 :class="(isWhite) ? 'white-text' : ''">Cart</h2>
            <div :class="(isWhite) ? 'white-background' : 'blackbackground'" class="divider"></div>
            <div>
                <cart-item-component v-for="item in cart" :key="item.id" :cartItem="item"></cart-item-component>
            </div>
            <div id="divider-2" class="divider" :class="(isWhite) ? 'white-background' : ''"></div>
            <div class="split-container">
                <h2 :class="(isWhite) ? 'white-text' : ''">Subtotal</h2>
                <h2 :class="(isWhite) ? 'white-text' : ''">${{ subtotal }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';
@import '../styles/color-shift.scss';

#cart-display-root {
    padding: 26px 0 26px 26px;
}

#empty-cart {
    text-align: center;
    margin-right: 26px;
}

h2 {
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    font-size: 28px;
}

.divider {
    margin: 10px 0;
    height: 2px;
}

#divider-2 {
    margin-top: 36px;
}

.split-container {
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import CartItemComponent from '@/components/CartItemComponent.vue';
import ColorShift from '@/mixins/ColorShift.vue';

@Component({
    components: {
        CartItemComponent
    }
})
export default class CartDisplay extends Mixins(ColorShift) {
    private get cart() {
        return this.$store.state.cart.cart;
    }

    private get subtotal() {
        return (this.$store.getters['cart/subtotal']).toFixed(2);
    }
}
</script>

