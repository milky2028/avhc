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
import { get } from 'idb-keyval';

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
    const cartItems: CartItem[] = await get('cart');
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item: CartItem) => this.$store.commit('cart/addItemToCart', item));
    }
  }
}
</script>
