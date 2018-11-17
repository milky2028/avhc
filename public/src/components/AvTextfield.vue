<template>
    <div class="textfield-root">
        <label for="textfield">{{ label }}</label>
        <input
            id="textfield"
            :type="type"
            :placeholder="label"
            :autocomplete="autocomplete"
            :pattern="pattern"
            :required="required"
            :list="(datalist) ? 'list' : ''">
        <datalist v-if="datalist" id="list">
            <option v-for="item of datalist" :key="item[itemKey]">{{ item[itemTitle] }}</option>
        </datalist>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/theme.scss';
.textfield-root {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

label {
    font-family: $secondary-font;
    margin: 5px;
    font-size: 16px;
}

input {
    padding: 20px 12px; 
    border: 2px solid $primary;
    border-radius: 5px;
    font-size: 18px;
    outline: transparent;
    -webkit-tap-highlight-color: transparent;
}

input:required {
  border-color: $primary;
}

// input:required:invalid {
//   border-color: red;
// }

// input:required:invalid {
//   border-color: red;
// }

// input:valid {
//   border: 2px solid red;
// }

// input:optional {
//   border: 2px solid red;
// }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AvTextfield extends Vue {
    @Prop(String) private label!: string;
    @Prop(String) private type!: string;
    @Prop(String) private autocomplete!: string;
    @Prop(Boolean) private required!: boolean;
    @Prop(String) private pattern!: string;
    @Prop(Number) private maxLength!: number;
    @Prop(Number) private minLength!: number;
    @Prop(Array) private datalist!: any[];
    @Prop(String) private itemKey!: string;
    @Prop(String) private itemTitle!: string;
}
</script>
