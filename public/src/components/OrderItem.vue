<template>
  <div class="order-root">
    <div class="field">Order:</div>
    <router-link class="field align-right link" to="/">#776756867</router-link>
    <div class="field">Date:</div>
    <div class="field align-right">10/10/2019</div>
    <div class="field">Status:</div>
    <div class="field align-right">Never</div>
    <div class="field">Total:</div>
    <div class="field align-right">$6999.99</div>
    <button>Track Shipment</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.order-root {
  font-family: $secondary-font; 
  padding: 26px 16px 10px 26px;
  border: 2px solid black;
  border-radius: 15px;
  display: grid;
  grid-row-gap: 16px;
  grid-template-areas:
    "orderLabel orderNumber"
    "dateLabel date"
    "statusLabel status"
    "totalLabel total"
    "track track"
}

.field {
  font-size: 24px;
}

.link {
  color: $primary;
  font-weight: bold;
  text-decoration: none;
}

.align-right {
  justify-self: end;
}

button {
  color: white;
  margin: 10px;
  padding: 12px 50px;
  grid-area: track;
  justify-self: center;
  background-color: $primary;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: $standard-shadow;
}
</style>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class OrderItem extends Vue {}
</script>
