<template>
    <div id="cart-root">
        <cart-display></cart-display>
        <shop-buttons class="buy-button"></shop-buttons>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-root {
    display: grid;
    height: $full-window;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
        "items"
        "buttons"
}

cart-display {
    grid-area: header;
}

.buy-button {
    grid-area: buttons;
    align-self: end;
    justify-self: end;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ShopButtons from '@/components/ShopButtons.vue';
import CartDisplay from '@/components/CartDisplay.vue';

@Component({
    components: {
        ShopButtons,
        CartDisplay
    }
})
export default class Cart extends Vue {}
</script>

