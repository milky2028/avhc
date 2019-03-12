<template>
  <div id="root">
    <div id="title-container">
      <h1>Aspen Valley</h1>
      <h2>Hemp Company</h2>
    </div>
    <div id="message">
      <h3>Disclaimer:</h3>
      <p>Statements on this website have not been evaluated by the FDA. Products distributed by Aspen Valley Group, LLC are not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before using any hemp supplement. Not intended for use by any person under 18 years of age. By entering, you agree to comply with our <router-link class="link" to="privacy-policy">Privacy Policy</router-link> and <router-link class="link" to="terms-and-conditions">Terms and Conditions</router-link>.</p>
      <router-link id="enter" to="flower">Enter</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/vars.scss';
@import '../styles/link.scss';

#root {
  background-image: url('../assets/intro.svg');
  background-position: 10% 50%;
  background-size: cover;
  height: $full-window;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#title-container {
  margin-top: 14vh;
  margin-bottom: 3vh;
}

h1 {
  text-align: center;
  font-size: 38px;
  align-self: center;
  font-family: $primary-font;
  text-transform: uppercase;
  padding-bottom: 5px;
}

h2 {
  font-size: 22px;
  letter-spacing: 4px;
  font-family: $secondary-font;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}

#message {
  margin-right: 10vh;
  margin-bottom: 10vh;
  height: 290px;
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
  margin: 2vh 0 0 2vh;
  padding: 12px 26px 8px 26px;
  font-family: $primary-font;
  text-transform: uppercase;
  font-size: 2em;
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 5px;
}

#enter:hover, #enter:focus {
  background-color: rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

p {
  font-size: 16px;
  font-family: $secondary-font;
  line-height: 130%;
}

.link {
  @include link(true);
}

.link:hover, .link:focus {
  @include hover(false);
}

@media (max-width: 823px) {
  #root {
    flex-direction: column;
  }

  #message {
    margin: 0;
    height: 320px;
    width: 100%;
    padding: 2vh 0 0 0;
  }

  h3,
  p {
    padding: 0 10vw;
  }

  #enter {
    margin: 2vh 4vw 0 2vh;
  }
}
</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
