<template>
    <div id="descriptions-root" v-html="activeProduct.description"></div>
</template>

<style lang="scss">
@import '../styles/theme.scss';

#descriptions-root {
    grid-area: product-description;
    font-size: 16px;
    font-family: $secondary-font;
    padding: 12px 22px;
    line-height: 130%;
}

.product-header {
    font-size: 16px;
    font-weight: bold;
    margin-top: 12px;
}

.bullet-header {
    margin-top: 10px;
    margin-bottom: 5px;
}

.list {
    list-style: inside;
    font-size: 16px;
    line-height: 130%;
}

h3 {
    font-weight: 600;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProductDescription extends Vue {
    private get activeProduct() {
      return this.$store.getters['products/activeProduct'];
    }
}
</script>


