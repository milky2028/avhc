<template>
  <div id="about-root">
    <div class="about-container">
            <h1 id="jumbo-title">The Definitive Guide to CBD Flower</h1>
      <div id="image-container">
        <img id="small-image" src="../assets/buds.jpg" alt="A small CBD flower bud">
      </div>
      <div>
      <p>CBD flower is a new phenomenon in the CBD world. By taking CBD back to its (literal) roots, CBD flower delivers a whole plant experience that’s nothing like any CBD experience you’ve ever had before.</p>
      <br>
      <p>With so many people new to CBD flower, its essential that we break down many of the burning questions surrounding this new product. What is CBD? How does it work? Where does it come from? What is hemp? What's the difference? How are the two related? How does all of this relate back to marijuana?</p>
      <br>
      <p>We’ll answer all these questions and more below in each section of our Definitive Guide to CBD Flower.</p>
      <br>
      <p>Coming soon!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.about-container {
  padding: 26px;
}

#jumbo-title {
  background-color: white;
  font-family: $secondary-font;
  font-weight: 600;
  font-size: 58px;
  padding: 26px;
  border: solid 3px $primary;
}

#small-image {
  display: block;
  margin: 0 auto;
  width: 150px;
}

@media (min-width: 1025px) {
    #about-root {
        display: grid;
        height: $full-window;
        align-items: center;
        justify-items: center;
        background-image: url('../assets/intro.svg');
        background-position: 10% 50%;
        background-size: cover;
    }

    .about-container {
        padding: 26px;
        width: 60vw;
        background-color: white;
        box-shadow: $standard-shadow;
    }
}
</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue { }
</script>
