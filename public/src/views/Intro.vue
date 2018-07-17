<template>
  <div id="root"></div>
</template>

<style lang="scss" scoped>
  #root {
    background-image: url('../assets/intro.svg');
    background-position: 10% 50%;
    background-size: cover;
    height: calc(100vh - 80px);
  }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import AppToolbar from '@/components/AppToobar.vue';

@Component
({
  // components: {
  //   AppToolbar
  // }
})
export default class Home extends Vue {}
</script>
