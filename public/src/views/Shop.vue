<template>
  <div id="shop-root">
    <div id="sidebar" class="display">
      <cart-display></cart-display>
    </div>
    <div id="main-container">
      <image-gallery></image-gallery>
      <product-selector></product-selector>
      <product-description></product-description>
      <shop-buttons :showAddButton="true"></shop-buttons>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#main-container {
  display: grid;
  grid-template-rows: 42vh 150px 1fr 95px;
  grid-template-areas: 
    "image-gallery"
    "product-selector"
    "product-description"
    "shop-buttons"
}

shop-buttons {
  grid-area: shop-buttons;
}

#sidebar {
  display: none;
}

@media (min-width: 1025px) {
  #shop-root {
    height: $full-window;
    background-image: url('../assets/intro.svg');
    background-position: 10% 50%;
    background-size: cover;
    display: grid;
    grid-template-columns: 25vw 1fr;
    grid-column-gap: 4vw;
    padding-right: 4vw;
    grid-template-areas:
      "sidebar card"
  }

  #sidebar {
    background-color: $primary;
    box-shadow: $standard-shadow;
    display: block;
    overflow-y: auto; 
  }

  #main-container {
    padding: 36px;
    background-color: white;
    box-shadow: $standard-shadow;
    margin: 8vh 0;
    grid-template-columns: 55% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image description"
  }
}
</style>

<script scoped lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from '@/components/ImageGallery.vue';
import ShopButtons from '@/components/ShopButtons.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import ProductSelector from '@/components/ProductSelector.vue';
import CartDisplay from '@/components/CartDisplay.vue';

declare const window: Window;

@Component({
  components: {
    ImageGallery,
    ProductSelector,
    ProductDescription,
    ShopButtons,
    CartDisplay
  }
})

export default class Shop extends Vue {
  private window = window;
}
</script>
