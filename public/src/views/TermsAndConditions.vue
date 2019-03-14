<template>
  <container-view-with-button :hideBtn="true">
    <header-with-divider>Terms and Conditions </header-with-divider>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
@import '../styles/article.scss';
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';

@Component({
  components: {
    HeaderWithDivider,
    ContainerViewWithButton
  }
})
export default class TermsAndConditons extends Vue {}
</script>

