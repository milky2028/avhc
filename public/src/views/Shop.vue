<template>
  <div id="shop-root">
    <image-gallery></image-gallery>
    <product-selector></product-selector>
    <product-description></product-description>
    <shop-buttons></shop-buttons>
  </div>
</template>

<style lang="scss" scoped>
#shop-root {
  height: calc(100vh - 80px);
  display: grid;
  grid-template-rows: 33vh 150px 1fr 80px;
  grid-template-areas: 
    "image-gallery"
    "product-selector"
    "product-description"
    "shop-buttons"
}
</style>

<script scoped lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from '@/components/ImageGallery.vue';
import ShopButtons from '@/components/ShopButtons.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import ProductSelector from '@/components/ProductSelector.vue';

@Component({
  components: {
    ImageGallery,
    ProductSelector,
    ProductDescription,
    ShopButtons
  }
})

export default class Shop extends Vue { }
</script>
