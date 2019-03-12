<template>
  <div class="grid-container">
    <div class="slot" :style="(rightPadding) ? { paddingRight: '26px' } : {}">
      <slot></slot>
    </div>
    <bottom-button
      v-if="!hideBtn"
      class="btn"
      :style="(stickyBtn) ? stickyBtnStyles: {}"
      :btnText="btnText"
      @btnAction="$emit('btnAction')"
    ></bottom-button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

div {
  font-family: $secondary-font;
}

.grid-container {
  display: grid;
  height: $full-window;
  box-sizing: border-box;
  grid-template-rows: 1fr 83px;
  grid-template-areas:
    'slot'
    'button';
}

.slot {
  grid-area: slot;
  padding: 26px 0 26px 26px;
}

.btn {
  grid-area: button;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BottomButton from '@/components/BottomButton.vue';

@Component({
  components: {
    BottomButton
  }
})
export default class ContainerViewWithButton extends Vue {
  @Prop(String) public btnText!: string;
  @Prop(Boolean) public stickyBtn!: boolean;
  @Prop(Boolean) public rightPadding!: boolean;
  @Prop(Boolean) public hideBtn!: boolean;

  get stickyBtnStyles() {
    return {
      position: 'sticky',
      bottom: '0px',
      zIndex: 10
    };
  }
}
</script>



