<template>
  <container-view-with-button :hideBtn="true">
    <header-with-divider>Test Results</header-with-divider>
      <ul>
        <li
          v-for="result of results"
          :key="result.name">
            <a class="link" :href="result.href">{{ result.name }}</a>
          </li>
      </ul>
  </container-view-with-button>
</template>

<style lang="scss" scoped>
@import '@/styles/article.scss';

ul {
  margin-top: 16px;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContainerViewWithButton from '@/components/ContainerViewWithButton.vue';
import HeaderWithDivider from '@/components/HeaderWithDivider.vue';


@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider
  }
})

export default class TestResults extends Vue {
  public results = [
    {
      href: 'Man',
      name: 'Bird'
    },
    {
      href: 'Man',
      name: '5/14/2019 | CBD Flower Strain | Space Candy'
    }
  ]
}
</script>
