<template>
    <div id="image-gallery-root" :style="backgroundStyles" :title="image.alt">
        <img class="hidden-image" :src="image.src" :alt="image.alt">
        <price-display v-if="this.activeProduct" id="price-display"></price-display>
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

  .loading-image {
    background-position: 50% 50%;
    background-size: cover;
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
import { mapGetters } from 'vuex';
import { ProductState } from '@/modules/ProductsModule';
import Product from '@/types/Product';

@Component({
  components: {
    PriceDisplay
  },
  computed: {
    ...mapGetters('products', {
      activeProduct: 'activeProduct'
    })
  }
})
export default class ImageGallery extends Vue {
public activeProduct!: Product;
private get backgroundStyles() {
  return {
    backgroundImage: `url('${this.image.src}')`
  };
}

private get image() {
  const path = this.$route.params.productName;
  return {
    src: require(`../assets/product-images/${path}.jpg`),
    alt: (path === 'cbd-flower') ? '28 grams of CBD Hemp Flower' :
    (path === 'unfiltered-cbd-joints') ? 'Unfiltered, Prerolled CBD Hemp Joints' : 'Prerolled Filtered Hemp CBD Cigarettes'
  };
}
}
</script>