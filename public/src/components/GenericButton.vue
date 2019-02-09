<template>
    <button @click="btnAction">{{ btnText }}</button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  background-color: white;
  border-top: 3px black solid;
  padding: 26px;
  text-transform: uppercase;
  font-family: 'Elianto';
  font-size: 28px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GenericButton extends Vue {
  @Prop(Function) public btnAction!: (params?: any) => any;
  @Prop(String) public btnText!: string;
}
</script>



