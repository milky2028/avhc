<template>
    <div>
        <h2><slot></slot></h2>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

h2 {
    font-size: $h1;
    font-family: $secondary-font;
}

h2 + div {
    margin: 10px 0;
    height: 2px;
    background-color: black;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HeaderWithDivider extends Vue {}
</script>
