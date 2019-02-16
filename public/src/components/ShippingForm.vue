<template>
  <div>
    <header-with-divider>{{ formHeader }} Address</header-with-divider>
    <form autocomplete="on">
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}Name`"
        class="padding-right"
        type="text"
        label="Name"
        autocomplete="name"
        :required="true"
      ></av-textfield>
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}Address`"
        class="padding-right"
        type="text"
        label="Address"
        autocomplete="street-address"
        :required="true"
      ></av-textfield>
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}City`"
        class="padding-right"
        type="text"
        label="City"
        autocomplete="address-level2"
        :required="true"
      ></av-textfield>
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}State`"
        class="padding-right"
        type="text"
        label="State/Province/Region"
        autocomplete="address-level1"
        :required="true"
        :datalist="stateTaxes"
        itemKey="state"
        itemTitle="abbr"
      ></av-textfield>
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}Zip`"
        class="padding-right"
        type="number"
        label="Zip Code"
        autocomplete="postal-code"
        :required="true"
        pattern="^\d{5,6}(?:[-\s]\d{4})?$"
      ></av-textfield>
      <av-textfield
        :fieldId="`${formHeader.toLowerCase()}Country`"
        class="padding-right"
        type="text"
        label="Country"
        autocomplete="country"
        :required="true"
      ></av-textfield>
      <av-textfield
        v-if="formHeader === 'Shipping'"
        fieldId="phone"
        class="padding-right"
        type="number"
        label="Phone Number"
        autocomplete="tel"
      ></av-textfield>
      <generic-selector
        v-if="formHeader === 'Shipping'"
        fieldId="shippingMethod"
        class="padding-right"
        label="Shipping Option"
        :options="shippingOptions"
        titleKey="label"
        valueKey="id"
      ></generic-selector>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';
form {
  margin-bottom: 26px;
}

.padding-right {
  margin-right: 26px;
}

@media (min-width: 1025px) {
  form {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AvTextfield from '@/components/AvTextfield.vue';
import GenericSelector from '@/components/GenericSelector.vue';
import StateTaxes from '@/exports/StateTaxes';
import { mapState } from 'vuex';
import { CartState } from '@/modules/CartModule';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';

@Component({
  components: {
    AvTextfield,
    GenericSelector,
    HeaderWithDivider
  },
  computed: {
    ...mapState('cart', {
      shippingOptions: (state: CartState) => state.shippingOptions
    })
  }
})
export default class ShippingForm extends Vue {
  @Prop(String) private formHeader!: string;
  private stateTaxes = StateTaxes;
}
</script>
