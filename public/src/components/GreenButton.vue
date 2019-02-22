<template>
    <button><slot></slot></button>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

button {
  color: white;
  margin: 10px;
  padding: 12px 50px;
  grid-area: track;
  justify-self: center;
  background-color: $primary;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: $standard-shadow;
  font-family: $secondary-font
}

button > a {
  text-decoration: none;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class GreenButton extends Vue {}
</script>
