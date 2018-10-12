<template>
    <div id="flower-root">
        <h1>Aspen Valley</h1>
        <h2>The Greatest CBD Flower on Earth.</h2>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#flower-root {
    padding: 24px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Flower extends Vue { }
</script>


