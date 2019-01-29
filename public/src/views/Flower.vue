<template>
    <div id="flower-root">
        <product-expose class="expose" url="/shop/cbd-flower" src="solo.jpg" alt="CBD-Rich Hemp Flower in Isolation">
            <h1 class="display">Aspen Valley</h1>
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
        <product-expose class="expose" url="/shop/filtered-cbd-cigarettes" src="cig.jpg" alt="CBD-Rich Hemp Flower in Isolation" :verticalPosition="0">
            <h2>One of a Kind CBD Cigarettes</h2>
        </product-expose>
        <div id="third-section">
            <div class="actual-image">
                <img class="hidden-image" src="" alt="">
            </div>
            <div id="black-section">
                <expose-text>
                    <template slot="header">Designed to Burn Smoothly</template>
                    <template slot="main-text">Specially harvested to burn just right, a CBD Cigarrette is just the break you need.</template>
                </expose-text>
                <expose-text>
                    <template slot="header">Sustainably Green</template>
                    <template slot="main-text">Aspen Valley Hemp is grown and harvested with sustainable, green energy practices in mind.</template>
                </expose-text>
            </div>
        </div>
        <product-expose class="expose" url="/shop/unfiltered-cbd-joints" src="joints.jpg" alt="CBD-Rich Hemp Joints" :horizontalPosition="10">
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

.display {
    display: block;
}

@media (max-width: 340px) {
    .section {
        margin-top: 100px;
    }
}

@media (min-width: 940px) {
    #flower-root {
        padding-right: 3vw;
        background-image: url('../assets/intro.svg');
        background-position: 10% 50%;
        background-size: cover;
        height: $full-window;
        display: grid;
        grid-template-columns: 23vw 1fr 1fr 1fr;
        grid-template-rows: $full-window;
        grid-column-gap: 4vw;
        grid-template-areas: 
          "sidebar card1 card2 card3" 
    }

    .section {
        height: auto;
        min-height: auto;
    }

    #third-section {
        display: none;
    }

    #second-section {
        grid-area: sidebar;
        box-shadow: $standard-shadow;
    }

    .expose {
        margin: 70px 0;
        box-shadow: $standard-shadow;
        background-color: white;
        width: 100%;
    }

    h2 {
        font-size: 20px;
    }

    .display {
        display: none;
    }
}

@media (min-width: 825px) and (max-width: 1200px) {
    h2 {
        font-size: 14px;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductExpose from '@/components/ProductExpose.vue';
import ExposeText from '@/components/ExposeText.vue';

declare const window: Window;

@Component({
    components: {
        ProductExpose,
        ExposeText
    }
})
export default class Flower extends Vue {
    private get windowInnerWidth() {
        return window.innerWidth;
    }
}
</script>


