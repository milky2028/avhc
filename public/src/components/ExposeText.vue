<template>
    <div id="expose-text-root">
        <h2 class="header">
            <slot name="header"></slot>
        </h2>
        <div id="divider"></div>
        <p class="main-text">
            <slot name="main-text"></slot>
        </p>
    </div>   
</template>

<style lang="scss" scoped>
#expose-text-root {
    color: white;
    font-family: 'Mukta Malar', sans-serif;
}

.header {
    font-size: 28px;
    letter-spacing: 1px;
    padding-right: 24px;
}

#divider {
    margin: 10px 0;
    background-color: white;
    height: 1px;
}

.main-text {
    padding-right: 24px;
    font-size: 22px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 10px;
}

@media (min-width: 825px) and (max-width: 1200px) {
    .header {
        font-size: 24px;
    }

    .main-text {
        font-size: 16px;
        line-height: 28px;
    }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ExposeText extends Vue {}
</script>
