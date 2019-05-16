<template>
  <div id="cart-item-root" v-if="currentProduct">
    <div id="cart-image" :name="image.alt" :style="backgroundStyles"></div>
    <router-link class="link" :to="`/shop/${cartItem.product}`">
      <h3 :class="(isWhite) ? 'white-text' : ''">{{ cartItem.size }} - {{ currentProduct.title }}</h3>
    </router-link>
    <h3 id="strain" :class="(isWhite) ? 'white-text' : ''">{{ currentStrainTitle }}</h3>
    <div id="quantity-container">
      <h3 id="quantity-header" :class="(isWhite) ? 'white-text' : ''">Quantity</h3>
      <select v-model="selectedQuantity" @input="setItemQuantity($event.target)">
        <option v-for="option of options" :key="option">{{ option}}</option>
      </select>
      <h3 id="price" :class="(isWhite) ? 'white-text' : ''">${{ priceDisplay }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';
@import '../styles/color-shift.scss';
@import '../styles/link.scss';

#cart-item-root {
  font-family: $secondary-font;
  font-weight: 600;
  padding: 26px 26px 0 0;
  font-size: 22px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 8px;
  grid-template-rows: 30px 30px 30px;
  grid-template-areas:
    'image title'
    'image strain'
    'image details';
}

#cart-image {
  width: 80px;
  height: 90px;
  background-position: 50% 50%;
  background-size: cover;
}

#strain {
  grid-area: strain;
}

.link {
  @include link;
}

.link:hover, .link:focus  {
  @include hover(false);
}

h3 {
  margin-top: 2px;
  margin-left: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

select {
  height: 35px;
  margin-top: -5px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 100ms ease-in;
}

select:hover, select:focus {
  background-color: rgba(0, 0, 0, 0.2);
}

#quantity-container {
  grid-area: details;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

#quantity-header {
  padding-right: 12px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import Product from '@/types/Product';
import EventBus from '@/exports/EventBus';
import Strain from '@/types/Strain';
import CartItem from '@/types/CartItem';
import ColorShift from '@/mixins/ColorShift.vue';
import { mapState, mapMutations } from 'vuex';
import { QuantityPayload } from '@/modules/CartModule';
import { clear, set } from 'idb-keyval';

@Component({
  computed: {
    ...mapState('cart', ['cart']),
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapMutations('cart', ['removeItemFromCart', 'setQuantity'])
  }
})
export default class CartItemComponent extends Mixins(ColorShift) {
  @Prop() private cartItem!: CartItem;
  private cart!: CartItem[];
  private removeItemFromCart!: (payload: string) => void;
  private setQuantity!: (payload: QuantityPayload) => void;
  private products!: Product[];
  private selectedQuantity = 0;
  private options = [...Array(25).keys()];

  private setItemQuantity(target: HTMLSelectElement) {
    clear();
    if (target.selectedIndex === 0) {
      this.removeItemFromCart(this.cartItem.id);
      set('cart', this.cart);
    } else {
      const payload: QuantityPayload = {
        productName: this.cartItem.product,
        size: this.cartItem.size,
        strain: this.cartItem.strain,
        quantity: target.selectedIndex
      };
      this.setQuantity(payload);
      set('cart', this.cart);
    }
  }

  private beforeMount() {
    EventBus.$on('addToCart', () => {
      this.selectedQuantity = this.cartItem.quantity!;
    });

    this.selectedQuantity = this.cartItem.quantity!;
  }

  private get backgroundStyles() {
    return {
      backgroundImage: `url('${this.image.src}')`
    };
  }

  private get image() {
    return {
      src: require(`../assets/product-images/${
        this.currentProduct.images[0].src
      }.jpg`),
      alt: this.currentProduct.images[0].alt
    };
  }

  public get priceDisplay() {
    return (this.cartItem.price * this.selectedQuantity).toFixed(2);
  }

  private get currentProduct(): Product {
    return this.products.find(
      (product: Product) => product.name === this.cartItem.product
    )!;
  }

  private get currentStrainTitle(): string {
    return this.currentProduct.strains.find(
      (strain) => strain.name === this.cartItem.strain
    )
      ? this.currentProduct.strains.find(
          (strain) => strain.name === this.cartItem.strain
        )!.title
      : 'Aspen Valley OG';
  }
}
</script>

