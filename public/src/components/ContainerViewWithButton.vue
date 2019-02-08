<template>
    <div>
      <slot class="slot"></slot>
      <generic-button :style="(stickyBtn) ? stickyBtnStyles: {}" class="btn" :buttonText="buttonText" :buttonAction="buttonAction"></generic-button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

div {
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
  @Prop(Function) public buttonAction!: (params?: any) => any;
  @Prop(String) public buttonText!: string;
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



