<template>
  <div id="root">
    <div id="title-container">
      <h1>Aspen Valley</h1>
      <h2>CBD Prerolls</h2>
    </div>
    <div id="message">
      <h3>Disclaimer:</h3>
      <p>Products distributed by Aspen Valley Group, LLC are not intended to diagnose, treat, cure, or prevent any disease. Smoking can have inherent health risks. Not intended for use by any person under 18 years of age.</p>
      <router-link id="enter" to="shop">Enter</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/theme.scss';

  #root {
    background-image: url('../assets/intro.svg');
    background-position: 10% 50%;
    background-size: cover;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #title-container {
    text-align: center;
    font-size: 38px;
    margin-top: 14vh;
    margin-bottom: 3vh;
    align-self: center;
    font-family: $primary-font;
    text-transform: uppercase;
  }

  h2 {
    font-size: 22px;
    letter-spacing: 4px;
    font-family: $secondary-font;
  }

  #message {
    margin-right: 10vh;
    margin-bottom: 10vh;
    height: 230px;
    width: 500px;
    background-color: white;
    padding: 0 55px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: $standard-shadow;
  }

  h3 {
    font-weight: bold;
    font-family: $secondary-font;
    margin-bottom: 5px;
  }

  #enter {    
    padding: 36px 0 0 32px;
    font-family: $primary-font;
    text-transform: uppercase;
    font-size: 2em;
    align-self: flex-end;
    justify-self: flex-end;
  }

  @media (max-width: 823px) {
    #root {
      flex-direction: column;
    }

    #message {
      margin: 0;
      height: 310px;
      width: 100%;
      padding: 0;
    }

    h3, p {
      padding: 0 12vw;
    }

    #enter {
      padding: 36px 12vw 0 32px;
    }
  }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue { }
</script>
