<template>
    <div id="flower-root">
        <product-expose url="/shop" src="solo.jpg" alt="CBD-Rich Hemp Flower in Isolation">
            <h1>Aspen Valley</h1>
            <h2>The Best CBD Flower on Planet Earth.</h2>
        </product-expose>
        <div id="second-section" class="section">
            <expose-text>
                <template slot="header">A Whole Plant Experience</template>
                <template slot="main-text">Enjoy all-natural CBD-Rich Hemp products in their rawest form, without any extra solvents or additives.</template>
            </expose-text>
            <expose-text>
                <template slot="header">Grown in the USA</template>
                <template slot="main-text">Grown, harvested, packaged and sold all here in the United States. Aspen Valley is the best in American Hemp.</template>
            </expose-text>
            <expose-text>
                <template slot="header">Non-Psychoactive</template>
                <template slot="main-text">Embrace your world without stepping out of it. CBD is relaxtion without dissociation.</template>
            </expose-text>
        </div>
        <product-expose url="/shop" src="cig.jpg" alt="CBD-Rich Hemp Flower in Isolation" :verticalPosition="0">
            <h2>One of a Kind CBD Cigarettes</h2>
        </product-expose>
        <div id="third-section">
            <div class="actual-image">
                <img class="hidden-image" src="" alt="">
            </div>
            <div id="black-section">
                <expose-text>
                    <template slot="header">Grown in the USA</template>
                    <template slot="main-text">Grown, harvested, packaged and sold all here in the United States. Aspen Valley is the best in American Hemp.</template>
                </expose-text>
                <expose-text>
                    <template slot="header">Non-Psychoactive</template>
                    <template slot="main-text">Embrace your world without stepping out of it. CBD is relaxtion without dissociation.</template>
                </expose-text>
            </div>
        </div>
        <product-expose url="/shop" src="joints.jpg" alt="CBD-Rich Hemp Joints" :horizontalPosition="10">
            <h2>Prerolled CBD Joints for Any Occasion</h2>
        </product-expose>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

.section {
    height: 700px;
    min-height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5vh 0 5vh 24px;
}

#second-section {
    background-color: $primary;
}

#third-section {
    height: 700px;
    display: grid;
    grid-template-rows: 1fr 460px;
}

.actual-image {
    background-image: url('../assets/evo.jpg');
    background-position: 50% 50%;
    background-size: cover;
}

#black-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    padding: 5vh 0 5vh 24px;
    min-height: 375px;
}

@media (max-width: 340px) {
    .section {
        margin-top: 100px;
    }
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


