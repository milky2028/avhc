<template>
  <container-view-with-button
    btnText="Sign Out">
    <div>
      <header-with-divider>Orders</header-with-divider>
    </div>
  </container-view-with-button>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider
  }
})
export default class Orders extends Vue { }
</script>

