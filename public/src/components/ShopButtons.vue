<template>
    <div id="root">
        <button id="add">Add</button>
        <button id="buy">Buy</button>
    </div>
</template>

<style lang="scss" scoped>
#root {
    grid-area: shop-buttons;
    align-self: end;
    width: 100vw;
    display: flex;
    justify-content: center;
}

button {
    font-family: 'Elianto';
    text-transform: uppercase;
    background-color: white;
    border-style: solid;
    border-color: black;
    font-size: 28px;
    padding: 24.5px;
    width: 50vw;
}

#add {
    border-width: 3px 1.5px 0 0;
}

#buy {
    border-width: 3px 0 0 1.5px;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ShopButtons extends Vue { }
</script>

