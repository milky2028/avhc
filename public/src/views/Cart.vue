<template>
    <div id="cart-root">
        <shop-buttons></shop-buttons>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#cart-root {
    display: grid;
    height: $full-window;
}

shop-buttons {
    align-self: end;
    justify-self: end;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ShopButtons from '@/components/ShopButtons.vue';

@Component({
    components: {
        ShopButtons
    }
})
export default class Cart extends Vue {}
</script>

