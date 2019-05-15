<template>
  <container-view-with-button :hideBtn="true">
    <header-with-divider>Test Results</header-with-divider>
    <ul>
      <li v-for="result of results" :key="result.name">
        <a
          target="_blank"
          rel="noopener"
          type="application/pdf"
          class="link"
          :href="`${publicPath}test-results-files/${result.href}.pdf`"
        >{{ formatDate(result.date) }} | {{ result.strain }}</a>
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
import { FormatJsDate } from '../exports/DateFunctions';

interface TestResult {
  href: string;
  date: Date;
  strain: string;
}

@Component({
  components: {
    ContainerViewWithButton,
    HeaderWithDivider
  }
})
export default class TestResults extends Vue {
  public formatDate = FormatJsDate;
  public publicPath = process.env.BASE_URL;
  public results: TestResult[] = [
    {
      href: 'suver-haze',
      date: new Date(2019, 9, 22),
      strain: 'CBD Flower | Suzer Haze'
    },
    {
      href: 'special-sauce',
      date: new Date(2018, 10, 1),
      strain: 'CBD Flower | Special Sauce'
    },
    {
      href: 'lifter',
      date: new Date(2018, 9, 22),
      strain: 'CBD Flower | Lifter'
    },
    {
      href: 'hawaiian-haze',
      date: new Date(2018, 10, 1),
      strain: 'CBD Flower | Hawaiin Haze'
    },
    {
      href: 'elektra',
      date: new Date(2018, 9, 22),
      strain: 'CBD Flower | Elektra'
    },
    {
      href: 'sour-space-candy',
      date: new Date(2018, 9, 22),
      strain: 'CBD Flower | Sour Space Candy'
    }
  ];
}
</script>
