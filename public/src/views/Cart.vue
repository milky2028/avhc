<template>
    <div id="cart-root">
        <div id="cart-container">
            <cart-display class="cart-display"></cart-display>
            <shop-buttons class="buy-button"></shop-buttons>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-root {
    display: grid;
    height: $full-window;
}

#cart-container {
    display: grid;
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

@media (min-width: 1025px) {
    #cart-root {
        place-content: center;
        background-image: url('../assets/intro.svg');
        background-position: 10% 50%;
        background-size: cover;
    }

    #cart-container {
        overflow: auto;
        width: 80vw;
        background-color: white;
        height: 70vh;
        box-shadow: $standard-shadow;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:
            "top"
            "description";
    }

    .cart-display {
        grid-area: top;
    }
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

