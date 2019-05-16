<template>
  <div id="shop-buttons-root">
    <button id="add" class="bottom-button" v-if="showAddButton" :style="tempQuantity ? { justifyContent: 'space-between' } : { justifyContent: 'center' }">
      <button @click="decreaseQuantity()" :style="hideIfItemQuantityZero" class="mat-icon small-icon">remove_circle_outline</button>
      <span @click="increaseQuantity()">{{ addButtonField }}</span>
      <button @click="increaseQuantity()" :style="hideIfItemQuantityZero" class="mat-icon small-icon">add_circle</button>
    </button>
    <button id="buy" class="bottom-button" :class="(singleButtonStyles) ? 'no-add' : ''" :style="borderStyles" @click="buyOrAddToCart()">
      <span><span :style="hideIfItemQuantityZero" class="mat-icon small-icon arrow-icon">keyboard_arrow_up</span></span>
      <span>{{ buyButtonField }}</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#shop-buttons-root {
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
  padding: 26px;
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
  transition: 100ms ease-in;
}

#buy:hover, #buy:focus {
  background-color: black;
  color: white;
}

.arrow-icon {
  justify-self: flex-start;
  padding-right: 10px;
  margin-top: -15px;
}

.no-add {
  width: 100%;
  border-left: none;
}

@media (min-width: 1025px) {
  #shop-buttons-root {
    width: 25vw;
    grid-area: description;
    justify-self: end;
  }

  .bottom-button {
    padding: 20px 26px;
  }
  
  .no-add {
    border: 3px solid black;
    border-width: 3px;
  }

  #add {
    border-width: 3px 1.5px 3px 3px;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import EventBus from '@/exports/EventBus';
import { mapMutations, mapState } from 'vuex';

declare const window: Window;

@Component({
  computed: {
    ...mapState('cart', [
      'tempQuantity'
    ])
  },
  methods: {
    ...mapMutations('cart', [
      'increaseQuantity',
      'decreaseQuantity'
    ])
  }
})
export default class ShopButtons extends Vue {
  public tempQuantity!: number;
  @Prop(Boolean) private showAddButton!: boolean;
  @Prop(String) private buyButtonText!: string;
  private increaseQuantity!: () => void;
  private decreaseQuantity!: () => void;

  private get addButtonField(): string | number {
    return (this.tempQuantity < 1) ? 'Add' : this.tempQuantity;
  }

  private get buyButtonField(): string  {
    return (this.buyButtonText) ? this.buyButtonText : (this.tempQuantity) ? 'Cart' : 'Buy';
  }

  private get hideIfItemQuantityZero(): { display: string } {
    return this.tempQuantity ? { display: 'block' } : { display: 'none' };
  }

  private buyOrAddToCart(): void {
    if (this.buyButtonField === 'Buy') {
      return;
    } else {
      EventBus.$emit('addToCart');
    }
  }

  private get singleButtonStyles() {
      return (!this.showAddButton) ? true : false;
  }

  private get borderStyles() {
    return (window.innerWidth < 1024) ? '' :
    (this.singleButtonStyles) ? {
      borderWidth: '3px'
    } : {
      borderWidth: '3px 3px 3px 1.5px'
    };
  }
}
</script>

