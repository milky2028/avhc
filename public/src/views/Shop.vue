<template>
  <div>
    <h1>This is an Item page</h1>
    <image-gallery></image-gallery>
  </div>
</template>

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
