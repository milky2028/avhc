<template>
  <container-view-with-button
    btnText="Purchase"
    :btnAction="() => this.$router.push('/checkout')"
    :stickyBtn="true">
    <form>
      <av-textfield
        class="positions"
        type="email"
        label="Email"
        :required="true"
        autocomplete="email"
        fieldId="email"
      ></av-textfield>
    </form>
    <shipping-form formHeader="Shipping"></shipping-form>
    <div class="switch-container padding-right">
      <p>Different billing address?</p>
      <av-switch fieldId="billingVsShipping" v-model="differentBilling"></av-switch>
    </div>
    <shipping-form formHeader="Billing" v-if="differentBilling"></shipping-form>
    <header-with-divider>Billing Info</header-with-divider>
    <form>
      <av-textfield
        class="positions"
        type="text"
        label="Name on Card"
        :required="true"
        autocomplete="cc-name"
        fieldId="nameOnCard"
      ></av-textfield>
      <av-textfield
        fieldId="cardNumber"
        class="positions"
        type="number"
        label="Card Number"
        :required="true"
        autocomplete="cc-number"
        pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$"
      ></av-textfield>
      <generic-selector
        fieldId="expirationMonth"
        class="padding-right"
        label="Expiration Month"
        :options="months"
        titleKey="abbr"
        valueKey="abbr"
      ></generic-selector>
      <generic-selector
        fieldId="expirationYear"
        class="padding-right"
        label="Expiration Year"
        :options="years"
      ></generic-selector>
      <av-textfield
        fieldId="cvv"
        class="positions"
        type="number"
        label="CVV"
        :required="true"
        autocomplete="cc-csc"
        :minLength="3"
        :maxLength="4"
      ></av-textfield>
      <av-textfield fieldId="couponCode" class="positions" type="text" label="Coupon Code"></av-textfield>
    </form>
    <div class="switch-container padding-right" v-if="!user">
      <p>Create an account?</p>
      <av-switch fieldId="createAccount" v-model="createAccount"></av-switch>
    </div>
    <form>
      <av-textfield
        v-if="createAccount"
        fieldId="password"
        class="positions"
        type="password"
        label="Password"
        :required="true"
        autocomplete="new-password"
      ></av-textfield>
    </form>
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
  </container-view-with-button>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';
@import '@/styles/switch.scss';

h2 {
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  font-size: 28px;
}

h3 {
  font-size: 18px;
  font-family: $secondary-font;
}

.divider {
  background-color: black;
  margin: 10px 0;
  height: 2px;
  margin-bottom: 26px;
}

.positions {
  margin: 0 26px 26px 0;
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
import { Component, Vue } from 'vue-property-decorator';
import ShippingForm from '@/components/ShippingForm.vue';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';
import ShopButtons from '@/components/ShopButtons.vue';
import GenericSelector from '@/components/GenericSelector.vue';
import ShippingMethod from '@/types/ShippingMethod';
import StateTaxes from '@/exports/StateTaxes';
import CouponCode from '@/types/CouponCode';
import { StringToDate } from '@/exports/DateFunctions';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { CartState } from '@/modules/CartModule';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';
import { User } from 'firebase';
import { SetOrderFieldPayload } from '@/modules/OrderModule';

interface IndexUser extends User {
  [key: string]: any;
}

@Component({
  computed: {
    ...mapState('cart', ['shippingOptions']),
    ...mapState('user', ['user']),
    ...mapGetters('cart', ['subtotal'])
  },
  methods: {
    ...mapMutations('order', ['setOrderField'])
  },
  components: {
    ShippingForm,
    AvTextfield,
    AvSwitch,
    GenericSelector,
    ContainerViewWithButton,
    HeaderWithDivider
  }
})
export default class Checkout extends Vue {
  public createAccount: boolean = false;
  public differentBilling: boolean = false;
  public shippingOptions!: ShippingMethod[];
  public subtotal!: number;

  public months = [
    { month: 'January', abbr: 'Jan' },
    { month: 'February', abbr: 'Feb' },
    { month: 'March', abbr: 'Mar' },
    { month: 'April', abbr: 'Apr' },
    { month: 'May', abbr: 'May' },
    { month: 'June', abbr: 'June' },
    { month: 'July', abbr: 'July' },
    { month: 'August', abbr: 'Aug' },
    { month: 'September', abbr: 'Sept' },
    { month: 'October', abbr: 'Oct' },
    { month: 'November', abbr: 'Nov' },
    { month: 'December', abbr: 'Dec' }
  ];

  public years = [
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
    2031,
    2032
  ];

  private user!: IndexUser;
  private setOrderField!: (payload: SetOrderFieldPayload) => void;

  private beforeMount() {
    this.setFieldFromUser('email');
    this.setFieldFromUser('phoneNumber');
    this.setFieldFromUser('displayName', 'billingName');
    this.setFieldFromUser('displayName', 'shippingName');
  }

  private get tax() {
    const billingState = this.$store.state.order.billingState
      ? this.$store.state.order.billingState
      : this.$store.state.order.shippingState;
    const stateTax = StateTaxes.find((state) => state.abbr === billingState)
      ? StateTaxes.find((state) => state.abbr === billingState)!
      : StateTaxes[51];
    return stateTax.taxRate;
  }

  private get discount(): CouponCode {
    const code = this.$store.state.order.couponCode
      .toLowerCase()
      .replace(/\s/gi, '');
    const coop = this.$store.state.cart.coupons.find(
      (coupon: CouponCode) => coupon.code === code
    );
    const notExpired = coop
      ? new Date() < StringToDate(coop.expirationDate)
      : false;
    return coop && coop.active && notExpired ? coop : false;
  }

  private get shippingCost() {
    const shippingMethodName: string = this.$store.state.order.shippingMethod;
    const shippingMethod = shippingMethodName
      ? this.shippingOptions.find(
          (method: ShippingMethod) => method.id === shippingMethodName
        )
      : this.shippingOptions[0];
    return shippingMethod!.price;
  }

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

  private setFieldFromUser(field: string, vuexField?: string) {
    if (this.user && this.user[field]) {
      this.setOrderField({
        key: field,
        value: (vuexField) ? this.user[vuexField] : this.user[field]
      });
    }
  }
}
</script>
