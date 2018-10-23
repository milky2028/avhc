<template>
    <div id="toolbar">
        <h1><router-link to="/flower">AVHC</router-link></h1>
        <div id="button-container">
            <router-link to="/about" id="faq-icon" class="small-icon">?</router-link>
            <router-link to="/cart"><div class="mat-icon small-icon">shopping_cart</div></router-link>
            <router-link to="/orders"><div id="account" class="mat-icon small-icon">person</div></router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/theme.scss';

    #toolbar {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: stretch;
        padding: 18px 26px;
        z-index: 100;
    }

    h1 {
        margin-bottom: -5px;
        color: $primary;
        font-family: 'Elianto';
        font-size: $h1;
        text-transform: uppercase;
    }

    #button-container { 
        display: flex;
        align-items: center;
    }

    #faq-icon {
        margin-bottom: -4px;
        margin-right: 6px;
        font-family: $primary-font;
        font-size: 24px;
    }

    .small-icon {
        padding: 0 8px;
    }

    #account {
        padding-right: 0px;
    }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppToolbar extends Vue { }
</script>


