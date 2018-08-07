<template>
    <div id="root">
        <h1><router-link to="/">AVP</router-link></h1>
        <div id="button-container">
            <a id="faq-icon" class="small-icon">?</a>
            <a><div class="mat-icon small-icon">shopping_cart</div></a>
            <a><div class="mat-icon small-icon">person</div></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/theme.scss';

    #root {
        background-color: white;
        position: relative;
        box-shadow: $standard-shadow;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding: 22px;
    }

    h1 {
        margin-top: 4px;
        color: $primary;
        font-family: Elianto;
        font-size: $h1;
        text-transform: uppercase;
    }

    #button-container { 
        display: flex;
        align-items: center;
    }

    #faq-icon {
        padding-top: 5px;
        margin-right: 6px;
        font-family: $primary-font;
        font-size: 28px;
    }

    .small-icon {
        padding: 0 8px;
    }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppToolbar extends Vue { }
</script>


