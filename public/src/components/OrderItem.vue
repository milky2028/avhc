<template>
  <div class="order-root">
    <div class="field">Order:</div>
    <router-link class="field align-right link" :to="`orders/${orderNumber}`">#{{ orderNumber }}</router-link>
    <div class="field">Date:</div>
    <div class="field align-right">{{ orderDate }}</div>
    <div class="field">Status:</div>
    <div class="field align-right">{{ orderStatus }}</div>
    <div class="field">Total:</div>
    <div class="field align-right">${{ orderTotal.toFixed(2) }}</div>
    <green-button v-if="hasShipped">
      <a href="/">Track Shipment</a>
    </green-button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.order-root {
  font-family: $secondary-font; 
  padding: 26px 16px 10px 26px;
  margin-bottom: 26px;
  border: 2px solid black;
  border-radius: 15px;
  display: grid;
  grid-row-gap: 12px;
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
  border-radius: 5px;
  color: $primary;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 8px;
  transition: 100ms ease-in;
}

.link:hover, .link:focus {
  background-color: rgba(0, 0, 0, 0.1);
}

.align-right {
  justify-self: end;
}
</style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { FormatJsDate } from '@/exports/DateFunctions';
import GreenButton from '@/components/GreenButton.vue';

@Component({
  components: {
    GreenButton
  }
})
export default class OrderItem extends Vue {
  @Prop(String) public orderNumber!: string;
  @Prop(String) public orderDate!: string;
  @Prop(String) public orderStatus!: string;
  @Prop(Number) public orderTotal!: number;
  @Prop(Boolean) public hasShipped!: boolean;

  private formatDate(date: Date) {
    return FormatJsDate(date);
  }
}
</script>
