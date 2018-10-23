<template>
    <div>${{ (selectedSize) ? selectedSize.price : price }}</div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PriceDisplay extends Vue {
     private get activeProduct() {
        return this.$store.getters['products/activeProduct'];
    }
    private get price() {
        return this.activeProduct.price;
    }

    private get selectedSize() {
        return this.activeProduct.sizes[this.$store.state.products.selectedSizeIndex];
    }
}
</script>


