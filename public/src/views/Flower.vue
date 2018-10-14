<template>
    <div id="flower-root">
        <product-expose url="/shop" src="solo.jpg" alt="CBD-Rich Hemp Flower in Isolation">
            <h1>Aspen Valley</h1>
            <h2>The Best CBD Flower on Planet Earth.</h2>
        </product-expose>
        <div id="second-section"></div>
        <product-expose url="/shop" src="cig.jpg" alt="CBD-Rich Hemp Flower in Isolation" verticalPosition=0>
            <h2>One of a Kind CBD Cigarettes</h2>
        </product-expose>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#second-section {
    background-color: $primary;
    height: $full-window;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductExpose from '@/components/ProductExpose.vue';

@Component({
    components: {
        ProductExpose
    }
})
export default class Flower extends Vue {}
</script>


