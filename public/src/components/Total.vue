<template>
  <div>
    <div id="subtotal-container">
      <h3>Subtotal</h3>
      <h3 class="padding-right">${{ subtotal.toFixed(2) }}</h3>
    </div>
    <div id="subtotal-container">
      <h3>Shipping</h3>
      <h3 class="padding-right">${{ shippingCost.toFixed(2) }}</h3>
    </div>
    <div id="subtotal-container" v-if="discount">
      <h3>Discount</h3>
      <h3
        class="padding-right"
      >{{ `-${discount.type === 'fixed' ? '$' : ''}${discount.amount.toFixed(2)}${discount.type === 'percent' ? '%' : ''}` }}</h3>
    </div>
    <div id="subtotal-container">
      <h3>Tax</h3>
      <h3 class="padding-right">{{ tax.toFixed(2) }}%</h3>
    </div>
    <div class="divider less-margin"></div>
    <div id="subtotal-container">
      <h2>Total</h2>
      <h2 class="padding-right">${{ grandTotal.toFixed(2) }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

div {
  font-family: $secondary-font;
}

h2 {
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  font-size: 28px;
}

h3 {
  font-size: 18px;
}

.divider {
  background-color: black;
  margin: 10px 0;
  height: 2px;
  margin-bottom: 26px;
}

.padding-right {
  margin-right: 26px;
}

.less-margin {
  margin-bottom: 10px;
}

#subtotal-container {
  display: flex;
  justify-content: space-between;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import CouponCode from '@/types/CouponCode';

@Component
export default class TotalComponent extends Vue {
  @Prop(Number) private subtotal!: number;
  @Prop(Number) private shippingCost!: number;
  @Prop(Object) private discount!: CouponCode;
  @Prop(Number) private tax!: number;

  private get grandTotal() {
    return this.discount
      ? this.discount.type === 'fixed'
        ? (this.subtotal + this.shippingCost - this.discount.amount) *
          (this.tax / 100 + 1)
        : (this.subtotal + this.shippingCost) *
          ((100 - this.discount.amount) / 100) *
          (this.tax / 100 + 1)
      : (this.subtotal + this.shippingCost) * (this.tax / 100 + 1);
  }
}
</script>



