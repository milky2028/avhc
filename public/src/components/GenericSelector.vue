<template>
    <div class='selector-root'>
        <label>{{ label }}</label>
        <div class='select-container'>
            <select :id="fieldId" @input="onInput($event.target)">
            <option value='' disabled selected>Select a {{ label }}</option>
            <option v-for='option of options' :key='getOption(option, valueKey)' :value='getOption(option, valueKey)'>{{ getOption(option, titleKey) }}</option>
        </select>
            <div class='mat-icon small-icon arrow-icon'>keyboard_arrow_right</div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@import '../styles/theme.scss';
.selector-root {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
    font-family: $secondary-font;
    margin: 5px;
    font-size: 16px;
}

select {
  font-family: $secondary-font;
  padding: 21.5px 12px;
  border: 2px solid $primary;
  border-radius: 5px;
  grid-area: main;
  width: 100%;
  -webkit-appearance: none;
  color: $primary;
  background-color: transparent;
  outline: transparent;
  font-size: 18px;
  z-index: 10;
}

.select-container {
  width: 100%;
  display: grid;
  grid-template-areas: 'main';
}

.arrow-icon {
    margin-right: 10px;
  grid-area: main;
  justify-self: end;
  align-self: center;
}

@media (min-width: 1025px) {
  .selector-root {
    grid-area: image;
    align-self: end;
    width: 280px;
  }

  .select-wrapper {
    padding: 12px;
  }
}
</style>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import EventBus from '@/exports/EventBus';
import CartItem from '@/types/CartItem';

interface InputEventTarget extends EventTarget {
  value: any;
}

@Component
export default class GenerticSelector extends Vue {
  @Prop(String) private fieldId!: string;
  @Prop(String) private label!: string;
  @Prop(Array) private options!: any[];
  @Prop(String) private valueKey!: string;
  @Prop(String) private titleKey!: string;

  private onInput(event: InputEventTarget) {
    this.$emit('dirty', true);
    const payload = {
        key: this.fieldId,
        value: event.value
    };
    this.$store.commit('order/setOrderItem', payload);
  }

  private getOption(option: any, keyVal: string) {
    return (keyVal) ? option[keyVal] : option;
  }
}
</script>
