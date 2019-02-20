<template>
  <container-view-with-button
    btnText="Sign Out"
    :btnAction="signOut"
    :stickyBtn="true">
    <div>
      <header-with-divider class="header">Orders</header-with-divider>
      <div class="order-container">
        <order-item
        v-for="order of orders"
        :key="order.orderId"
        :orderNumber="order.orderId"
        :orderDate="order.orderDay"
        :orderTotal="order.orderTotal"
        :orderStatus="order.orderStatus"
        :hasShipped="order.orderStatus === 'Shipped'"></order-item>
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
import { mapActions, mapState } from 'vuex';
import Order from '@/types/Order';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider,
    OrderItem
  },
  computed: {
    ...mapState('pastOrders', ['orders'])
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
  public orders!: Order[];
  private signOut!: () => void;
  private getOrders!: () => void;

  private beforeMount() {
    this.getOrders();
  }
}
</script>

