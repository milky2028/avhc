<template>
    <div>${{ displayedPrice }}</div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EventBus from '../exports/EventBus';
import { mapState, mapGetters } from 'vuex';
import Product from '@/types/Product';
import Size from '@/types/Size';

@Component({
  computed: {
    ...mapGetters('products', {
        activeProduct: 'activeProduct'
    }),
    ...mapState('products', {
        selectedSize: 'selectedSizeIndex'
    })
  }
})
export default class PriceDisplay extends Vue {
private activeProduct!: Product;
private selectedSize!: Size;

private get displayedPrice() {
    return (this.selectedSize) ? this.selectedSize.price : this.activeProduct.price;
}
}
</script>


