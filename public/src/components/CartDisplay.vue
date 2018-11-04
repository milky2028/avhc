<template>
    <div id="cart-display-root">
        <h2 :class="(isWhite) ? 'white-text' : ''">Cart</h2>
        <div class="divider" :class="(isWhite) ? 'white-background' : ''"></div>
        <div>
            <cart-item v-for="item in cart" :key="item.id" :cartItem="item"></cart-item>
        </div>
        <div id="divider-2" class="divider" :class="(isWhite) ? 'white-background' : ''"></div>
        <div class="split-container">
            <h2 :class="(isWhite) ? 'white-text' : ''">Subtotal</h2>
            <h2 :class="(isWhite) ? 'white-text' : ''">${{ subtotal }}</h2>
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

#divider-2 {
    margin-top: 26px;
}

.split-container {
    padding-right: 26px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.white-text {
    color: white;
}

.white-background {
    background-color: white;
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
    private get route() {
        return this.$route.name;
    }

    private get cart() {
        return this.$store.state.cart.cart;
    }

    private get subtotal() {
        return (this.$store.getters['cart/subtotal']).toFixed(2);
    }

    private get isWhite() {
        return (this.route === 'shop') ? true : false;
    }
}
</script>

