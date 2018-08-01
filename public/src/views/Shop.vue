<template>
  <div>
    <image-gallery></image-gallery>
  </div>
</template>

<style scoped lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from '@/components/ImageGallery.vue';

@Component({
  components: {
    ImageGallery
  }
})

export default class Shop extends Vue {}
</script>
