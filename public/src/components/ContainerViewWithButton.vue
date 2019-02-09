<template>
    <div class="grid-container">
      <div class="slot">
        <slot></slot>
      </div>
      <generic-button
        class="btn"
        :style="(stickyBtn) ? stickyBtnStyles: {}"
        :btnText="btnText"
        :btnAction="btnAction"></generic-button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.grid-container {
  display: grid;
  height: $full-window;
  box-sizing: border-box;
  grid-template-rows: 1fr 83px;
  grid-template-areas:
    "slot"
    "button"
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
import GenericButton from '@/components/GenericButton.vue';

@Component({
  components: {
    GenericButton
  }
})
export default class ContainerViewWithButton extends Vue {
  @Prop(Function) public btnAction!: (params?: any) => any;
  @Prop(String) public btnText!: string;
  @Prop(Boolean) public stickyBtn!: boolean;

  get stickyBtnStyles() {
    return {
      position: 'sticky',
      bottom: '0px',
      zIndex: 10
    };
  }
}
</script>



