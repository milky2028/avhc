<template>
  <div>
    <h2
      v-if="cart.length < 1"
      id="empty-cart"
      :class="(isWhite) ? 'white-text' : ''"
    >Your cart is empty.</h2>
    <div v-if="cart.length >= 1">
      <header-with-divider>Cart</header-with-divider>
      <div>
        <cart-item-component v-for="item in cart" :key="item.id" :cartItem="item"></cart-item-component>
      </div>
      <div
        id="divider-2"
        class="divider"
        :class="(isWhite) ? 'white-background' : 'black-background'"
      ></div>
      <div class="split-container">
        <h2 :class="(isWhite) ? 'white-text' : ''">Subtotal</h2>
        <h2 :class="(isWhite) ? 'white-text' : ''">${{ subtotal.toFixed(2) }}</h2>
      </div>
      <div id="clear-button-container">
        <button class="small-green-button" @click="clearCart()">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';
@import '../styles/color-shift.scss';
@import '@/styles/small-green-button.scss';

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

#clear-button-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

button:hover,
button:focus {
  transition: 100ms ease-in;
  box-shadow: none;
}
</style>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import CartItemComponent from '@/components/CartItemComponent.vue';
import ColorShift from '@/mixins/ColorShift.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { CartState } from '@/modules/CartModule';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';


@Component({
  components: {
    CartItemComponent,
    HeaderWithDivider
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['subtotal'])
  },
  methods: {
    ...mapMutations('cart', ['clearCart'])
  }
})
export default class CartDisplay extends Mixins(ColorShift) {
  public clearCart!: () => void;
  private cart!: CartItemComponent[];
  private subtotal!: number;
}
</script>

