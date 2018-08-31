<template>
    <div id="root">
        <div id="left-arrow" @click="previousImage" class="mat-icon">keyboard_arrow_left</div>
        <div id="right-arrow" @click="nextImage"  class="mat-icon">keyboard_arrow_right</div>
        <price-display id="price-display"></price-display>
    </div>
</template>

<style scoped lang="scss">
  @import '../styles/theme.scss';

  #root {
    grid-area: image-gallery;
    background-color: orange;
    background-position: 10% 50%;
    background-size: cover;
    height: 42vh;
    display: grid;
    grid-template-columns: 55px 1fr 55px;
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
    private nextImage() {
      // console.log('next');
    }

    private previousImage() {
      // console.log('previous');
    }
   }

   // :style="{ backgroundImage: `url('${imageURL}')` }"
</script>