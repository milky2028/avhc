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
import { Auth } from '@/exports/Firebase';

@Component({
  components: {
    AppToolbar
  }
})

export default class App extends Vue {
  private async mounted() {
    this.$store.dispatch('user/setAuthState');
    this.$store.dispatch('products/getProducts');
    await this.$store.dispatch('firebase/getAuth');
    this.$store.dispatch('user/setAuthState');
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