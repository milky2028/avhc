<template>
    <div id="root" :style="backgroundStyles" :title="image.alt">
        <img id="hidden-image" :src="image.src" :alt="image.alt">
        <div id="left-arrow" v-if="this.activeProduct.images && this.activeProduct.images.length > 1" @click="previousImage" class="mat-icon">keyboard_arrow_left</div>
        <div id="right-arrow" v-if="this.activeProduct.images && this.activeProduct.images.length > 1" @click="nextImage"  class="mat-icon">keyboard_arrow_right</div>
        <price-display  v-if="this.activeProduct.images" id="price-display"></price-display>
    </div>
</template>

<style scoped lang="scss">
  @import '../styles/theme.scss';

  #root {
    grid-area: image-gallery;
    background-position: 50% 50%;
    background-size: cover;
    height: 42vh;
    display: grid;
    grid-template-columns: 55px 1fr 55px;
    align-items: center;
    grid-template-areas:
      "left-arrow main right-arrow"
  }

  #hidden-image {
    max-width: 60vw;
    opacity: 0;
  }

  #left-arrow {
    grid-area: left-arrow;
  }

  #right-arrow {
    grid-area: right-arrow;
  }

  #price-display {
    grid-area: right-arrow;
    align-self: end;
  }
</style>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import PriceDisplay from '@/components/PriceDisplay.vue';

  @Component({
    components: {
      PriceDisplay
    }
  })
  export default class ImageGallery extends Vue {
    private get activeProduct() {
      return this.$store.getters['products/activeProduct'];
    }

    get backgroundStyles() {
      return {
        backgroundImage: `url('${this.image.src}')`
      };
    }

    get image() {
      return (this.activeProduct.images) ?
       {
        src: require(`../assets/product-images/${this.activeProduct.images[0].src}.jpg`),
        alt: this.activeProduct.images[0].alt
      } :
      {
        src: require(`../assets/product-images/all-products.jpg`),
        alt: `The entire Aspen Valley Prerolls products suite,
              including CBD Hemp Flower, Filtered CBD Hemp Cigarrettes, and Unfiltered CBD Joints`
      };
    }

    private nextImage() {
      // console.log('next');
    }

    private previousImage() {
      // console.log('previous');
    }
   }
</script>