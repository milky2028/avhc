<template>
    <div id="root">
        <h1><router-link to="/">AVP</router-link></h1>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/theme.scss';

    #root {
        background-color: white;
        height: 80px;
        position: relative;
        box-shadow: $standard-shadow;
        display: flex;
        flex-direction: row;
        align-items: center
    }

    h1 {
        margin-top: 4px;
        color: $primary;
        font-family: Elianto;
        font-size: $h1;
        text-transform: uppercase;
        padding: $edge-padding;
    }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppToolbar extends Vue { }
</script>


