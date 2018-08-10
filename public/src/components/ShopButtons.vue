<template>
    <div id="root">
        <button id="add" :style="displayAddAndRemove ? { justifyContent: 'space-between' } : { justifyContent: 'center' }">
            <div @click="itemQuantity--" :style="displayAddAndRemove ? { display: 'block' } : { display: 'none' }" class="mat-icon">remove_circle_outline</div>
            <span @click="itemQuantity++">{{ addButtonField }}</span>
            <div @click="itemQuantity++" :style="displayAddAndRemove ? { display: 'block' } : { display: 'none' }" class="mat-icon">add_circle</div>
        </button>
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
    display: flex;
    align-items: center;
    justify-content: center;
}

#add {
    border-width: 3px 1.5px 0 0;
}

#buy {
    border-width: 3px 0 0 1.5px;
}

.mat-icon {
    text-transform: lowercase;
    font-family: 'Material Icons';
    font-size: 28px;
    // padding: 0 32px;
}

.displayButtonState {
    display: none;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ShopButtons extends Vue {
    public itemQuantity: number = 0;

    private get addButtonField(): string | number {
        if (this.itemQuantity < 1) {
          this.itemQuantity = 0;
          return 'Add';
        } else {
            return this.itemQuantity;
        }
    }

    private get displayAddAndRemove(): boolean {
        return this.itemQuantity < 1 ? false : true;
    }
}
</script>

