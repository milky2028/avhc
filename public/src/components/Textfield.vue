<template>
    <div id="textfield-root">
        <input>
    </div>
</template>

<style lang="scss" scoped>
#textfield-root {
    border: 1px solid black;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Textfield extends Vue {}
</script>
