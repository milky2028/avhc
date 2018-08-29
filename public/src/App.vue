<template>
  <div>
    <app-toolbar id="toolbar"></app-toolbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import './styles/reset.scss';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #toolbar {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
    padding: 26px;
    z-index: 100;
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