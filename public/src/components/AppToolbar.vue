<template>
    <div id="root">
        <div class="container">
            <h1><router-link to="/">AVP</router-link></h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/styles/container.scss';
    @import 'src/styles/theme.scss';

    #root {
        background-color: white;
        height: 80px;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        z-index: 9999;
        position: relative;
        box-shadow: $standard-shadow;
    }

    h1 {
        color: $primary;
        font-family: Elianto;
        font-size: $h1;
        text-transform: uppercase;
        padding: $edge-padding;
    }
</style>

