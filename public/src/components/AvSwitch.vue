<template>
    <div>
        <input
          :id="fieldId"
          type="checkbox"
          class="checkbox"
          :value="value"
          @input="$emit('input', $event.target.checked)">
        <label :for="fieldId"></label>
    </div>
</template>

<style lang="scss" scoped>
$red: #fd1a15;
$green: #007177;
$btnWidth: 15px;
$switchWidth: 40px;
$switchHeight: 19px;
$padding: 2px;

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox {
  display: none;
}

.checkbox + label {
  display: inline-block;
  position: relative;
  width: $switchWidth;
  height: $switchHeight;
  background: linear-gradient(to right, $red 0, #fc8b34 45%, #7fd03e 55%, $green 100%) 0 0;
  background-size: $switchWidth * 2 + 50 100%;
  border-radius: 70px;
  padding: $padding;
  cursor: pointer;
  transition: all 500ms ease;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2) inset;
  &:before {
    content: "";
    width: $btnWidth;
    height: $btnWidth;
    position: absolute;
    left: $padding;
    top: $padding;
    border-radius: 100%;
    background: white;
    text-align: center;
    line-height: $switchHeight - $padding * 2;
    font-family: "Cabin", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: $red;
    letter-spacing: 3px;
    text-transform: uppercase;
    transition: left 200ms ease, color 200ms ease, transform 150ms ease;
  }
  &:active {
    &:before {
      transform: scale(0.95);
    }
  }
}

.checkbox:checked + label {
  background-position-x: -($switchWidth + 50);
  &:before {
    content: "";
    color: $green;
    left: $switchWidth - $btnWidth - $padding;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AvSwitch extends Vue {
    @Prop(Boolean) public value!: boolean;
    @Prop(String) private fieldId!: string;
}
</script>

