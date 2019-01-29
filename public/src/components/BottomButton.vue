<template>
    <button @click="buttonAction">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
button {
    font-family: 'Elianto';
    width: 100%;
    background-color: white;
    text-transform: uppercase;
    border-top: 3px solid black;
    font-size: 28px;
    padding: 26px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BottomButton extends Vue {
    @Prop(String) public buttonText!: string;
    @Prop(Function) public buttonAction!: (params?: any) => any;
}
</script>
