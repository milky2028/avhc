<template>
    <div id="toolbar">
        <h1><router-link to="/flower">AVHC</router-link></h1>
        <div id="button-container">
            <router-link to="/about" id="faq-icon" class="small-icon"><button>?</button></router-link>
            <router-link id="cart-container" to="/cart">
                <div v-if="cartQuantity > 0" id="badge-root">{{ cartQuantity }}</div>
                <button id="cart-icon" class="mat-icon small-icon">shopping_cart</button>
            </router-link>
            <router-link to="/orders"><button id="account" class="mat-icon small-icon">person</button></router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/theme.scss';

    button {
        background: transparent;
    }

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

    #toolbar {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: stretch;
        padding: 18px 26px;
        z-index: 100;
    }

    #cart-container {
        display: grid;
        grid-template-areas: 
            "all"
    }

    #cart-icon {
        grid-area: all;
    }

    h1 {
        margin-bottom: -5px;
        color: $primary;
        font-family: 'Elianto';
        font-size: $h1;
        text-transform: uppercase;
    }

    #button-container { 
        display: flex;
        align-items: center;
    }

    #faq-icon {
        margin-bottom: -4px;
        margin-right: 6px;
        font-family: $primary-font;
        font-size: 24px;
    }

    .small-icon {
        padding: 0 8px;
    }

    #account {
        padding-right: 0px;
    }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppToolbar extends Vue {
    private get cartQuantity() {
        return this.$store.getters['cart/computedQuantity'];
    }
}
</script>


