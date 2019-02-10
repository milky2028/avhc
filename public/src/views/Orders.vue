<template>
  <container-view-with-button
    btnText="Sign Out"
    :stickyBtn="true">
    <div>
      <header-with-divider class="header">Orders</header-with-divider>
      <div class="order-container">
        <order-item></order-item>
      </div>
    </div>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
.order-container {
  padding-right: 26px;
}

.header {
  margin-bottom: 26px;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';
import OrderItem from '@/components/OrderItem.vue';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider,
    OrderItem
  }
})
export default class Orders extends Vue { }
</script>

