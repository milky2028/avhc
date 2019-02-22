<template>
  <container-view-with-button
    btnText="Checkout"
    @btnAction="this.$router.push('/checkout')"
    :stickyBtn="true">
    <cart-display></cart-display>
  </container-view-with-button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import CartDisplay from '@/components/CartDisplay.vue';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('cart', [
      'getCoupons',
      'getShippingOptions'
    ])
  },
  components: {
    ContainerViewWithButton,
    CartDisplay,
  }
})
export default class Cart extends Vue {
  private getCoupons!: () => void;
  private getShippingOptions!: () => void;

  private async beforeMount() {
    this.getShippingOptions();
    this.getCoupons();
  }
}
</script>

