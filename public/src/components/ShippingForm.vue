<template>
    <form autocomplete="on">
        <h2>{{ formHeader }}</h2>
        <div class="divider"></div>
        <av-textfield class="padding-right" type="text" label="Name" autocomplete="name" :required="true"></av-textfield>
        <av-textfield class="padding-right" type="text" label="Address" autocomplete="shipping street-address" :required="true"></av-textfield>
        <av-textfield class="padding-right" type="text" label="City" autocomplete="shipping locality" :required="true"></av-textfield>
        <!-- <generic-selector class="padding-right" label="State" :options="stateTaxes" titleKey="abbr" valueKey="abbr"></generic-selector> -->
        <av-textfield class="padding-right" type="text" label="State/Province/Region" autocomplete="shipping region" :required="true"></av-textfield>
        <generic-selector class="padding-right" label="Shipping Option" :options="shippingOptions" titleKey="label" valueKey="id"></generic-selector>
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
