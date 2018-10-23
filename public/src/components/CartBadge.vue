<template>
    <div id="badge-root">10</div>
</template>

<style lang="scss" scoped>
#badge-root {
    margin: 0 0 8px 8px;
    grid-area: all;
    align-self: start;
    justify-self: end;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: red;
    font-size: 15px;
    z-index: 10;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

export default class CartBadge extends Vue {}
</script>

