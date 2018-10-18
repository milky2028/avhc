<template>
    <div id="flower-root">
        <product-expose url="/shop" src="solo.jpg" alt="CBD-Rich Hemp Flower in Isolation">
            <h1>Aspen Valley</h1>
            <h2>The Best CBD Flower on Planet Earth.</h2>
        </product-expose>
        <div id="second-section" class="section">
            <expose-text></expose-text>
        </div>
        <product-expose url="/shop" src="cig.jpg" alt="CBD-Rich Hemp Flower in Isolation" :verticalPosition="0">
            <h2>One of a Kind CBD Cigarettes</h2>
        </product-expose>
        <div id="third-section" class="section">
            <div class="actual-image">
                <img class="hidden-image" src="" alt="">
            </div>
            <div id="black-section"></div>
        </div>
        <product-expose url="/shop" src="joints.jpg" alt="CBD-Rich Hemp Joints" :horizontalPosition="10">
            <h2>Prerolled CBD Joints for Any Occasion</h2>
        </product-expose>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

.section {
    height: $full-window;
}

#second-section {
    background-color: $primary;
}

#third-section {
    display: grid;
    grid-template-rows: 1fr 55vh
}

.actual-image {
    background-image: url('../assets/evo.jpg');
    background-position: 50% 50%;
    background-size: cover;
}

#black-section {
    background-color: black;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductExpose from '@/components/ProductExpose.vue';
import ExposeText from '@/components/ExposeText.vue';

@Component({
    components: {
        ProductExpose,
        ExposeText
    }
})
export default class Flower extends Vue {}
</script>


