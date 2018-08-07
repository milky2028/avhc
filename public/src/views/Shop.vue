<template>
  <div>
    <ImageGallery />
    <ShopButtons />
  </div>
</template>

<style scoped lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from '@/components/ImageGallery.vue';
import ShopButtons from '@/components/ShopButtons.vue';

@Component({
  components: {
    ImageGallery,
    ShopButtons
  }
})

export default class Shop extends Vue { }
</script>
