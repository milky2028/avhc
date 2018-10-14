<template>
    <div id="expose-root">
        <div id="header-container">
            <slot></slot>
            <router-link id="buy" :to="url"><h2>Buy ></h2></router-link>
        </div>
            <div id="actual-image" :style="actualImageStyle" :title="alt">
                <img class="hidden-image" :src="imageSrc" :title="alt">
            </div>
        </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

#expose-root {
    height: $full-window;
    display: grid;
    grid-template-rows: 1fr 50vh;
    grid-template-areas: 
        "top"
        "bottom"
}

#header-container {
    padding: 0 24px;
    justify-self: center;
    align-self: center;
    grid-area: top;
}

#actual-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    grid-area: bottom;
}

h1 {
    margin: 15px 0; 
}

h2 {
    line-height: 1.5em;
    margin: 20px 0;
}

#buy {
    color: $primary;
}
</style>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductExpose extends Vue {
  @Prop(String) private url!: string;
  @Prop(String) private src!: string;
  @Prop(String) private alt!: string;
  @Prop(Number) private horizontalPosition!: number;
  @Prop(Number) private verticalPosition!: number;

  private get imageSrc() {
    return require(`../assets/${this.src}`);
  }

  private get actualImageStyle() {
      return {
        backgroundImage: `url('${this.imageSrc}')`,
        backgroundPosition: `${(this.horizontalPosition) ?
            this.horizontalPosition : 50}% ${(this.verticalPosition) ? this.verticalPosition : 50}%`
      };
  }
}
</script>
