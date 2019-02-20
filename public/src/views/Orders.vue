<template>
  <container-view-with-button
    btnText="Sign Out"
    :btnAction="signOut"
    :stickyBtn="true">
    <div>
      <header-with-divider class="header">Orders</header-with-divider>
      <div class="order-container">
        <order-item
          orderNumber="sdfgwert45t"
          :orderDate="new Date()"
          :orderTotal="6969696.99"
          orderStatus="Shipped"
          :hasShipped="true"></order-item>
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
import { mapActions } from 'vuex';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider,
    OrderItem
  },
  methods: {
    ...mapActions('user', [
      'signOut'
    ]),
    ...mapActions('pastOrders', [
      'getOrders'
    ])
  }
})
export default class Orders extends Vue {
  private signOut!: () => void;
  private getOrders!: () => void;

  private mounted() {
    this.getOrders();
  }
}
</script>

