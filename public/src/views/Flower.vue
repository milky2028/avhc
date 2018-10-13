<template>
    <div id="flower-root">
        <div id="header-container">
            <h1>Aspen Valley</h1>
            <h2>The Best CBD Flower on Planet Earth.</h2>
            <router-link id="buy" to="shop"><h2>Buy ></h2></router-link>
        </div>
        <div id="actual-image" :style="backgroundStyles" :title="image.alt">
            <img class="hidden-image" :src="image.src" :title="image.alt">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#flower-root {
    height: $full-window;
    display: grid;
    grid-template-rows: 1fr 50vh;
    grid-template-areas: 
        "top"
        "bottom"
}

#header-container {
    padding: 0 24px;
    justify-self: center;
    align-self: center;
}

#actual-image {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
}

h1 {
    margin: 15px 0; 
}

h2 {
    line-height: 1.5em;
    margin: 20px 0;
}

#buy {
    color: $primary;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Flower extends Vue {
    private image = {
        src: require(`../assets/solo.jpg`),
        alt: 'CBD-Rich Hemp Flower in Isolation'
    };

    private backgroundStyles = {
        backgroundImage: `url('${this.image.src}')`
    };
}
</script>


