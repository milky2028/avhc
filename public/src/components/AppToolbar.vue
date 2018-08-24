<template>
    <div>
        <h1><router-link to="/">AVP</router-link></h1>
        <div id="button-container">
            <a id="faq-icon" class="small-icon">?</a>
            <a><div class="mat-icon small-icon">shopping_cart</div></a>
            <a><div id="account" class="mat-icon small-icon">person</div></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/theme.scss';

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
        font-size: 28px;
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


