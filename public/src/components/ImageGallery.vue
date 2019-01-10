<template>
    <div id="image-gallery-root" :style="backgroundStyles" :title="image.alt">
        <img class="hidden-image" :src="image.src" :alt="image.alt">
        <div id="left-arrow" v-if="this.activeProduct.images && this.activeProduct.images.length > 1" @click="previousImage" class="mat-icon">keyboard_arrow_left</div>
        <div id="right-arrow" v-if="this.activeProduct.images && this.activeProduct.images.length > 1" @click="nextImage"  class="mat-icon">keyboard_arrow_right</div>
        <price-display  v-if="this.activeProduct.images" id="price-display"></price-display>
    </div>
</template>

<style scoped lang="scss">
  @import '../styles/theme.scss';

  #image-gallery-root {
    grid-area: image-gallery;
    background-position: 50% 50%;
    background-size: cover;
    height: 42vh;
    display: grid;
    grid-template-columns: 115px 1fr 115px;
    align-items: center;
    grid-template-areas:
      "left-arrow main right-arrow"
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
    font-size: 45px;
    margin: 0 10px 10px 0;
  }

  @media (min-width: 1025px) {
    #image-gallery-root {
      grid-area: image;
      height: calc(100% - 175px);
    }
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

    private get backgroundStyles() {
      return {
        backgroundImage: `url('${this.image.src}')`
      };
    }

    private get image() {
      return (this.activeProduct && this.activeProduct.images) ? {
        src: require(`../assets/product-images/${this.activeProduct.images[0].src}.jpg`),
        alt: this.activeProduct.images[0].alt
      } : {
        src: '../assets/product-images/generic-cbd.jpg',
        alt: 'CBD Hemp Flower'
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