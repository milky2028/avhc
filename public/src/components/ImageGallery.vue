<template>
    <div id="root">
        <div @click="previousImage" class="mat-icon">keyboard_arrow_left</div>
        <div @click="nextImage"  class="mat-icon">keyboard_arrow_right</div>
    </div>
</template>

<style scoped lang="scss">
  @import '../styles/theme.scss';

  #root {
    grid-area: image-gallery;
    background-color: orange;
    background-position: 10% 50%;
    background-size: cover;
    height: 38vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';


  @Component
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