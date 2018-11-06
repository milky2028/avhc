<template>
  <div id="checkout-root">
    <div id="checkout-container">
        <textfield></textfield>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

#checkout-root {
  display: grid;
  height: $full-window;
}

@media (min-width: 1025px) {
    #checkout-root {
        place-content: center;
        background-image: url('../assets/intro.svg');
        background-position: 10% 50%;
        background-size: cover;
    }

    #checkout-container {
        overflow: auto;
        width: 80vw;
        background-color: white;
        height: 70vh;
        box-shadow: $standard-shadow;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Textfield from '@/components/Textfield.vue';

@Component({
  components: {
    Textfield
  }
})
export default class Checkout extends Vue {}
</script>
