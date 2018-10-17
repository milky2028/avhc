<template>
    <div>
        <h2>This Is the Header<h2>
        <div id="divider"></div>
        <p>This is the main text<p>
    </div>   
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class EposeText extends Vue {}
</script>
