<template>
<div class="login-root">
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
    <bottom-button
    :buttonText="buttonText"
    :buttonAction="() => logInUser()"></bottom-button>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/switch.scss';
@import '@/styles/theme.scss';

.login-root {
    height: $full-window;
    display: grid;
    grid-template-rows: 1fr 83px;
    grid-template-areas: 
        "main"
        "button"
}

.container {
    padding: 26px;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';
import BottomButton from '@/components/BottomButton.vue';

@Component({
    components: {
        AvTextfield,
        AvSwitch,
        BottomButton
    }
})
export default class Login extends Vue {
    private createAccount: boolean = false;
    get buttonText() {
        return (this.createAccount) ? 'Sign Up' : 'Login';
    }

    private async logInUser() {
        await this.$store.dispatch('user/logInUser', { email: this.$store.state.order.email, password: this.$store.state.order.password });
        this.$router.push('/orders');
    }
}
</script>

