<template>
  <container-view-with-button btnText="Sign Out" @btnAction="signOut" :stickyBtn="true">
      <header-with-divider class="header">Account</header-with-divider>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';
import { mapActions } from 'vuex';

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider
  },
  methods: {
    ...mapActions('user', ['signOut'])
  }
})
export default class Orders extends Vue {
  private signOut!: () => void;
}
</script>

