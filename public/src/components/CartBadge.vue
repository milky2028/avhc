<template>
    <div id="badge-root">{{ cartQuantity }}</div>
</template>

<style lang="scss" scoped>
#badge-root {
    margin: 0 0 8px 8px;
    grid-area: all;
    align-self: start;
    justify-self: end;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #fc5316;
    font-size: 16px;
    z-index: 10;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CartItem from '../types/cartItem';

export default class CartBadge extends Vue {
    private get cartQuantity() {
        return this.$store.getters['cart/computedQuantity'];
    }
}
</script>

