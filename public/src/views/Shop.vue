<template>
  <div id="shop-root">
    <image-gallery></image-gallery>
    <product-description></product-description>
    <shop-buttons id="shop-buttons"></shop-buttons>
  </div>
</template>

<style lang="scss">
#shop-root {
  height: calc(100vh - 80px);
  display: grid;
  grid-template-rows: 38vh 1fr 86px;
  grid-template-areas: 
    "image-gallery"
    "product-description"
    "shop-buttons"
}

#shop-buttons {
  align-self: end;
}
</style>

<script scoped lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from '@/components/ImageGallery.vue';
import ShopButtons from '@/components/ShopButtons.vue';
import ProductDescription from '@/components/ProductDescription.vue';

@Component({
  components: {
    ImageGallery,
    ProductDescription,
    ShopButtons
  }
})

export default class Shop extends Vue { }
</script>
