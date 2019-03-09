<template>
  <container-view-with-button btnText="Sign Out" @btnAction="signOut" :stickyBtn="true">
    <div>
      <header-with-divider class="header">Order #{{ orderId }}</header-with-divider>
      <div class="order-container">
        <green-button id="green-btn">
          <router-link to="/account">Track Shipment</router-link>
        </green-button>
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

  private get orderId() {
    return this.$route.params.orderId;
  }

  private get currentOrder() {
    return this.orders.find((order) => order.orderId === this.orderId);
  }
}
</script>

