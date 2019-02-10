<template>
  <container-view-with-button
    :rightPadding="true"
    :btnText="btnText"
    :btnAction="() => logInUser()">
      <div class="container">
        <form>
        <av-textfield
            type="email"
            label="Email"
            :required="true"
            autocomplete="email"
            fieldId="email"></av-textfield>
        <av-textfield
            fieldId="password"
            type="password"
            label="Password"
            :required="true"
            :onEnter="logInUser"
            autocomplete="password"></av-textfield>
        <div class="switch-container padding-right">
            <p>Create an account?</p>
            <av-switch fieldId="createAccount" v-model="createAccount"></av-switch>
        </div>
        </form>
    </div>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
@import '@/styles/switch.scss';
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';

@Component({
    components: {
        AvTextfield,
        AvSwitch,
        ContainerViewWithButton
    }
})
export default class Login extends Vue {
    private createAccount: boolean = false;
    get btnText() {
        return (this.createAccount) ? 'Sign Up' : 'Login';
    }

    private async logInUser() {
        await this.$store.dispatch('user/logInUserWithEmailAndPassword', { email: this.$store.state.order.email, password: this.$store.state.order.password });
        this.$router.push('/orders');
    }
}
</script>

