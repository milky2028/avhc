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
      <form>
        <h2>Billing Info</h2>
        <div class="divider"></div>
        <av-textfield class="positions" type="text" label="Name on Card" :required="true" autocomplete="name" fieldId="nameOnCard"></av-textfield>
        <av-textfield class="positions" type="month" label="Expiration Date" :required="true"></av-textfield>
        <av-textfield class="positions" type="text" label="Coupon Code" :required="true"></av-textfield>
      </form>
      <div class="switch-container padding-right">
        <p>Create an account?</p>
        <av-switch fieldId="createAccount"></av-switch>
      </div>
      <form>
        <av-textfield class="positions" type="password" label="Password" :required="true" autocomplete="password" fieldId="password"></av-textfield>
      </form>
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
        padding: 25px;
        overflow: auto;
        width: 80vw;
        background-color: white;
        height: 70vh;
        box-shadow: $standard-shadow;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShippingForm from '@/components/ShippingForm.vue';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';

@Component({
  components: {
    ShippingForm,
    AvTextfield,
    AvSwitch
  }
})
export default class Checkout extends Vue {}
</script>
