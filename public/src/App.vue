<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppToolbar from '@/components/AppToolbar.vue';
import CartItem from '@/types/CartItem';
import Products from '@/exports/Products';
import ShippingOptions from '@/exports/ShippingOptions';
import Coupons from '@/exports/Coupons';

@Component({
  components: {
    AppToolbar
  }
})

export default class App extends Vue {
  private async beforeMount() {
    this.$store.commit('cart/setShippingOptions', await ShippingOptions());
    this.$store.commit('products/setProducts', await Products());
    this.$store.commit('cart/setCoupons', await Coupons());
    const localStorage = window.localStorage;
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem('cart')!);
      cart.forEach((item: CartItem) => {
        this.$store.commit('cart/addItemToCart', item);
      });
    }
  }
}
</script>