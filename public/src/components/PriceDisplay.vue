<template>
    <div>${{ price }}</div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PriceDisplay extends Vue {
    private get price() {
        return this.$store.getters['products/activeProduct'].price;
    }
}
</script>


