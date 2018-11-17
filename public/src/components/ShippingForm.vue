<template>
    <form autocomplete="on">
        <h2>{{ formHeader }} Address</h2>
        <div class="divider"></div>
        <av-textfield
            class="padding-right"
            type="text"
            label="Name"
            autocomplete="name"
            :required="true"></av-textfield>
        <av-textfield
            class="padding-right"
            type="text" label="Address"
            autocomplete="shipping street-address"
            :required="true"></av-textfield>
        <av-textfield
            class="padding-right"
            type="text"
            label="City"
            autocomplete="shipping address-level2"
            :required="true"></av-textfield>
        <av-textfield
            class="padding-right"
            type="text"
            label="State/Province/Region"
            autocomplete="shipping address-level1"
            :required="true"
            :datalist="stateTaxes"
            itemKey="state"
            itemTitle="abbr"></av-textfield>
        <av-textfield
            class="padding-right"
            type="number"
            label="Zip Code"
            autocomplete="shipping postal-code"
            :required="true"
            pattern="^\d{5,6}(?:[-\s]\d{4})?$"
            :maxLength="6"
            :minLength="6"></av-textfield>
        <av-textfield
            class="padding-right"
            type="text"
            label="Country"
            autocomplete="shipping country"
            :required="true"></av-textfield>
        <av-textfield
            class="padding-right"
            type="number"
            label="Phone Number"
            autocomplete="tel"></av-textfield>
        <generic-selector
            v-if="formHeader === 'Shipping'"
            class="padding-right"
            label="Shipping Option"
            :options="shippingOptions"
            titleKey="label"
            valueKey="id"></generic-selector>
    </form>
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

.padding-right {
    margin-right: 26px
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AvTextfield from '@/components/AvTextfield.vue';
import GenericSelector from '@/components/GenericSelector.vue';
import ShippingOptions from '@/exports/ShippingOptions';
import StateTaxes from '@/exports/StateTaxes';

@Component({
  components: {
    AvTextfield,
    GenericSelector
  }
})
export default class ShippingForm extends Vue {
  @Prop(String) private formHeader!: string;
  private shippingOptions: any[] = [];

  private async beforeCreate() {
    this.shippingOptions = await ShippingOptions();
  }

  private get stateTaxes() {
      return StateTaxes;
  }
}
</script>
