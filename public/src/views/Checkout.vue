<template>
  <div id="checkout-root">
    <div id="checkout-container">
      <av-textfield class="positions" type="email" label="Email" :required="true" autocomplete="email"></av-textfield>
      <shipping-form formHeader="Shipping"></shipping-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

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

@Component({
  components: {
    ShippingForm,
    AvTextfield
  }
})
export default class Checkout extends Vue {}
</script>
