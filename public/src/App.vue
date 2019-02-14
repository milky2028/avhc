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
import { mapActions } from 'vuex';
import UserModule from '@/modules/UserModule';

@Component({
  components: {
    AppToolbar
  },
  methods: {
    ...mapActions('user', [
      'setAuthState'
    ]),
    ...mapActions('products', [
      'getProducts'
    ])
  }
})

export default class App extends Vue {
  private getProducts!: () => void;
  private setAuthState!: () => void;

  private async mounted() {
    this.getProducts();
    this.setAuthState();
    const localStorage = window.localStorage;
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem('cart')!);
      cart.forEach((item: CartItem) => this.$store.commit('cart/addItemToCart', item));
    }
  }
}
</script>
