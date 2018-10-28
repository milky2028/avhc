<template>
    <div id="cart-display-root">
        <h2>Cart</h2>
        <div class="divider"></div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-display-root {
    padding: 26px 0 26px 26px;
}

h2 {
    text-align: left;
}

.divider {
    margin: 10px 0;
    background-color: black;
    height: 2px;
}

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CartDisplay extends Vue {}
</script>

