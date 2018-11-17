<template>
  <div id="checkout-root">
    <div id="checkout-container">
      <form>
        <av-textfield class="positions" type="email" label="Email" :required="true" autocomplete="email" fieldId="email"></av-textfield>
      </form>
      <shipping-form formHeader="Shipping"></shipping-form>
      <div class="switch-container padding-right">
        <p>Different billing address?</p>
        <av-switch fieldId="billingVsShipping"></av-switch>
      </div>
      <shipping-form formHeader="Billing"></shipping-form>
      <h2>Billing Info</h2>
      <div class="divider"></div>
      <form>
        <av-textfield class="positions" type="text" label="Name on Card" :required="true" autocomplete="cc-name" fieldId="nameOnCard"></av-textfield>
        <av-textfield
          fieldId="cardNumber"
          class="positions"
          type="number"
          label="Card Number"
          :required="true"
          autocomplete="cc-number"
          pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$"></av-textfield>
        <av-textfield
          fieldId="cardExpiration"
          class="positions"
          type="month"
          label="Expiration Date"
          :required="true"></av-textfield>
        <av-textfield
          fieldId="cvv"
          class="positions"
          type="number"
          label="CVV"
          :required="true"
          autocomplete="cc-csc"
          :minLength="3"
          :maxLength="4"></av-textfield>
        <av-textfield class="positions" type="text" label="Coupon Code"></av-textfield>
      </form>
      <div class="switch-container padding-right">
        <p>Create an account?</p>
        <av-switch fieldId="createAccount"></av-switch>
      </div>
      <form>
        <av-textfield class="positions" type="password" label="Password" :required="true" autocomplete="new-password" fieldId="password"></av-textfield>
      </form>
      <div class="button-container">
        <shop-buttons class="buy-button" :showAddButton="false" buyButtonText="Buy"></shop-buttons>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

h2 {
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    font-size: 28px;
}

.divider {
    background-color: black;
    margin: 10px 0;
    height: 2px;
    margin-bottom: 26px;
}

#checkout-root {
  display: grid;
  height: $full-window;
}

#checkout-container {
  padding: 26px 0 26px 26px;
}

.positions {
  margin: 0 26px 26px 0;
}

.switch-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}

.padding-right {
    margin-right: 26px
}

@media (min-width: 1025px) {
    #checkout-root {
        place-content: center;
        background-image: url('../assets/intro.svg');
        background-position: 10% 50%;
        background-size: cover;
    }

    #checkout-container {
        padding: 26px;
        overflow: auto;
        width: 80vw;
        background-color: white;
        height: 70vh;
        box-shadow: $standard-shadow;
    }

    form {
      display: flex;
      flex-wrap: wrap;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShippingForm from '@/components/ShippingForm.vue';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';
import ShopButtons from '@/components/ShopButtons.vue';

@Component({
  components: {
    ShippingForm,
    AvTextfield,
    AvSwitch,
    ShopButtons
  }
})
export default class Checkout extends Vue {}
</script>
