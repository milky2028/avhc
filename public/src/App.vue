<template>
<div>
  <app-toolbar></app-toolbar>
  <router-view></router-view>
</div>
</template>

<style lang="scss">
  @import 'src/styles/reset.scss';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppToolbar from '@/components/AppToolbar.vue';

@Component({
  components: {
    AppToolbar
  }
})

export default class App extends Vue { }
</script>