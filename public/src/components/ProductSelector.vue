<template>
    <div id="root">
        <p :class="removeClassIos">Select Product</p>
        <div id="select-container">
            <select v-model="selectedProductName">
                <option><h2>Unfiltered CBD Prerolls</h2></option>
                <option><h2>Filtered CBD Prerolls</h2></option>
                <option><h2>CBD Flower #1</h2></option>
                <option><h2>CBD Flower #2</h2></option>
            </select>
            <div class="mat-icon small-icon">keyboard_arrow_right</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';

#root {
    padding: 16px 22px;
    grid-area: product-selector;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-family: $secondary-font;
}

.label {
    margin-left: 5px;
    margin-bottom: -10px;
}

select {
    -webkit-appearance: none;
    color:  $primary;
    background-color: transparent;
    outline: transparent;
    font-size: 28px;
}

#select-container {
    display: flex;
    align-items: center;
}

@media (max-width: 340px) {
    select {
        width: 240px;
    }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

declare var safari: any;
declare var window: any;

@Component
export default class ProductSelector extends Vue {
    private selectedProductName: string = 'Unfiltered CBD Prerolls';

    /* tslint:disable */
    public get removeClassIos(): null | string {
        const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        return isSafari ? 'label' : null;
    }
    /* tslint:enable */
 }
</script>
