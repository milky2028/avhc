<template>
  <container-view-with-button :rightPadding="true" :btnText="btnText" @btnAction="logInUser">
    <div>
      <form>
        <av-textfield
          type="email"
          label="Email"
          :required="true"
          autocomplete="email"
          fieldId="email"
        ></av-textfield>
        <av-textfield
          fieldId="password"
          type="password"
          label="Password"
          :required="true"
          @enter="logInUser"
          autocomplete="current-password"
        ></av-textfield>
        <div class="switch-container padding-right">
          <p>Create an account?</p>
          <av-switch fieldId="createAccount" v-model="createAccount"></av-switch>
        </div>
        <button></button>
      </form>
    </div>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
@import '@/styles/switch.scss';
@import '@/styles/vars.scss';

button {
  padding: 0;
  background-image: url('../assets/googleBtn.png');
  background-color: transparent;
  width: 100%;
  height: 65px;
  background-position: 50% 50%;
  background-size: contain;
  border-radius: 5px;
  background-repeat: no-repeat;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AvTextfield from '@/components/AvTextfield.vue';
import AvSwitch from '@/components/AvSwitch.vue';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import { mapState, mapActions } from 'vuex';

@Component({
  components: {
    AvTextfield,
    AvSwitch,
    ContainerViewWithButton
  },
  computed: {
    ...mapState('newOrder', ['email', 'password'])
  },
  methods: {
    ...mapActions('user', ['logInUserWithEmailAndPassword'])
  }
})
export default class Login extends Vue {
  private createAccount: boolean = false;
  private email!: string;
  private password!: string;
  private logInUserWithEmailAndPassword!: (payload: { email: string; password: string }) => Promise<void>;

  get btnText() {
    return this.createAccount ? 'Sign Up' : 'Login';
  }

  private async logInUser() {
    await this.logInUserWithEmailAndPassword({
      email: this.email,
      password: this.password
    });
    this.$router.push('/orders');
  }
}
</script>

