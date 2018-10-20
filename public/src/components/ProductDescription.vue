<template>
    <div id="descriptions-root" v-html="mockHTML"></div>
</template>

<style lang="scss">
@import '../styles/theme.scss';

#descriptions-root {
    grid-area: product-description;
    font-size: 16px;
    font-family: $secondary-font;
    padding: 12px 22px;
    line-height: 130%;
}

.product-header {
    font-size: 16px;
    font-weight: bold;
    margin-top: 12px;
}

.bullet-header {
    margin-top: 10px;
    margin-bottom: 5px;
}

.list {
    list-style: inside;
    font-size: 16px;
    line-height: 130%;
}

h2 {
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProductDescription extends Vue {
    /* tslint:disable */
    private mockHTML = `<h2 class="product-header">Product Info Header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget pulvinar urna, in mattis nulla. Curabitur bibendum purus sit amet ullamcorper cursus. Proin lacus ipsum, commodo in elit sit amet, viverra euismod ante. Ut tincidunt elit vel nulla mollis dignissim. Duis a justo at eros auctor gravida at sed augue. Nam dui ligula, dapibus at elit ut, placerat elementum ipsum. Praesent vitae consectetur enim.</p>
    
    <h2 class="product-header">More Product Info</h2>
    <p>Mauris ligula enim, tristique non euismod id, fermentum ac augue. Aenean eget fringilla turpis. Donec vehicula arcu sed cursus cursus. Suspendisse efficitur egestas felis, vel cursus lorem molestie sit amet. Nunc malesuada sagittis leo sit amet ultrices. Pellentesque non finibus nunc, sed lobortis purus. Aliquam iaculis tristique ornare. Donec semper suscipit urna, at iaculis sapien elementum vel. Cras mollis, mauris dapibus feugiat interdum, sem sapien commodo quam, sit amet lacinia eros libero in dui. Curabitur mattis odio quis libero lacinia varius. Maecenas dignissim consectetur dui nec cursus. Vivamus posuere, ipsum non gravida interdum, est leo lacinia risus, nec varius neque turpis sed dolor. Praesent dolor urna, hendrerit sodales lorem ac, lobortis mattis lectus. Quisque convallis egestas quam, vitae vehicula tellus. Pellentesque faucibus purus a vulputate sodales. Curabitur orci orci, pellentesque id iaculis eu, tempor at eros.</p>

    <h2 class="product-header bullet-header">Secondary Header</h2>
    <ul class="list">
        <li>Bullet about the prodouct.</li>
        <li>Another Bullet about the prodouct.</li>
        <li>Perhaps a third.</li>
    </ul>`;
    /* tslint:enable */
}
</script>


