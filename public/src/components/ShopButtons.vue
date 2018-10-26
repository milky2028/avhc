<template>
    <div id="root">
        <button id="add" class="bottom-button" :style="itemQuantity ? { justifyContent: 'space-between' } : { justifyContent: 'center' }">
            <button @click="decrease()" :style="hideIfItemQuantityZero" class="mat-icon small-icon">remove_circle_outline</button>
            <span @click="increase()">{{ addButtonField }}</span>
            <button @click="increase()" :style="hideIfItemQuantityZero" class="mat-icon small-icon">add_circle</button>
        </button>
        <button id="buy" class="bottom-button" @click="buyOrAddToCart()">
            <span><span :style="hideIfItemQuantityZero" class="mat-icon small-icon arrow-icon">keyboard_arrow_up</span></span>
            <span>{{ buyButtonField }}</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#root {
    grid-area: shop-buttons;
    align-self: end;
    width: 100vw;
    display: flex;
    justify-content: center;
}

.bottom-button {
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

.arrow-icon {
    justify-self: flex-start;
    padding-right: 10px;
    margin-top: -15px;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EventBus from '@/exports/EventBus';
import SubmitPayment from '@/exports/SubmitPayment';

@Component
export default class ShopButtons extends Vue {
    private get itemQuantity() {
        return this.$store.state.cart.tempQuantity;
    }

    public increase() {
        this.$store.commit('cart/increaseQuantity');
    }

    public decrease() {
        this.$store.commit('cart/decreaseQuantity');
    }

    private created(): void {
        EventBus.$on('buyFlow', () => {
            SubmitPayment();
        });
    }

    private get addButtonField(): string | number {
        if (this.itemQuantity < 1) {
          this.$store.commit('cart/clearQuantity');
          return 'Add';
        } else {
            return this.itemQuantity;
        }
    }

    private get buyButtonField(): string  {
        return this.itemQuantity ? 'Cart' : 'Buy';
    }

    private get hideIfItemQuantityZero(): { display: string } {
        return this.itemQuantity ? { display: 'block' } : { display: 'none' };
    }

    private buyOrAddToCart(): void {
        (this.buyButtonField === 'Buy') ? EventBus.$emit('buyFlow') : EventBus.$emit('addToCart');
    }
}
</script>

