<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyMixin extends Vue {
    private get route() {
        return this.$route.name;
    }

    private get isWhite() {
        return (this.route === 'shop') ? true : false;
    }
}
</script>
