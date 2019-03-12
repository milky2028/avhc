<template>
  <container-view-with-button btnText="Sign Out" :stickyBtn="true" @btnAction="signOut">
    <div>
      <header-with-divider class="header">Orders</header-with-divider>
      <div class="order-container">
        <green-button id="green-btn">
          <router-link to="/account">Edit Account Details</router-link>
        </green-button>
        <order-item
          v-for="order of sortedOrders"
          :key="order.orderId"
          :orderNumber="order.orderId"
          :orderDate="order.orderDay"
          :orderTotal="order.orderTotal"
          :orderStatus="order.orderStatus"
          :hasShipped="order.orderStatus === 'Shipped'"
        ></order-item>
      </div>
    </div>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
.order-container {
  padding-right: 26px;
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 6px;
}

#green-btn {
  margin-bottom: 26px;
  transition: 100ms ease-in;
}

#green-btn:hover, #green-btn:focus {
  box-shadow: none;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';
import OrderItem from '@/components/OrderItem.vue';
import { mapActions, mapState } from 'vuex';
import Order from '@/types/Order';
import GreenButton from '@/components/GreenButton.vue';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider,
    OrderItem,
    GreenButton
  },
  computed: {
    ...mapState('pastOrders', ['orders'])
  },
  methods: {
    ...mapActions('user', ['signOut']),
    ...mapActions('pastOrders', ['getOrders'])
  }
})
export default class Orders extends Vue {
  public orders!: Order[];
  private signOut!: () => Promise<void>;
  private getOrders!: () => Promise<void>;

  private beforeMount() {
    this.getOrders();
  }

  private sortByDate(a: Order, b: Order) {
    const aa = new Date(`${a.orderDay} ${a.orderTime}`);
    const bb = new Date(`${b.orderDay} ${b.orderTime}`);
    return aa > bb ? 1 : aa < bb ? -1 : 0;
  }

  get sortedOrders() {
    return this.orders.sort(this.sortByDate).reverse();
  }
}
</script>

