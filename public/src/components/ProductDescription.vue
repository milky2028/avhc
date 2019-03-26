<template>
  <div id="descriptions-root" v-html="activeProduct && activeProduct.description"></div>
</template>

<style lang="scss">
@import '../styles/theme.scss';

#descriptions-root {
    grid-area: product-description;
    font-size: 16px;
    font-family: $secondary-font;
    padding: 12px 22px;
    line-height: 130%;
    margin-bottom: 18px;
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

// TODO: This is impacting styles elsewhere and needs to get moved.
h2 {
    font-weight: 600;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
}

@media (min-width: 1025px) {
    #descriptions-root {
        grid-area: description;
        padding: 12px 0 22px 22px;
    }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Product from '@/types/Product';

@Component({
  computed: {
    ...mapGetters('products', [
      'activeProduct'
    ])
  }
})
export default class ProductDescription extends Vue {
  public activeProduct!: Product;
}
</script>


