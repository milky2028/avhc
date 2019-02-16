<template>
    <div class="textfield-root">
        <label :for="fieldId">{{ label }}</label>
        <input
            :value="value"
            @input="onInput($event.target)"
            @blur="$emit('dirty', true)"
            @keyup.enter="onEnter"
            :class="(dirty) ? 'dirty' : ''"
            :id="fieldId"
            :type="type"
            :placeholder="label"
            :autocomplete="autocomplete"
            :pattern="pattern"
            :required="required"
            :minlength="minLength"
            :maxlength="maxLength"
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

input.dirty:not(:focus):invalid {
    border-color: #fc5316;
}

@media (min-width: 1025px) {
    .textfield-root {
        width: 280px;
    }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface InputEventTarget extends EventTarget {
    value: any;
}

@Component
export default class AvTextfield extends Vue {
    @Prop(String) public fieldId!: string;
    @Prop(String) public label!: string;
    @Prop(String) public type!: string;
    @Prop(String) public autocomplete!: string;
    @Prop(Boolean) public required!: boolean;
    @Prop(String) public pattern!: string;
    @Prop(Number) public maxLength!: number;
    @Prop(Number) public minLength!: number;
    @Prop(Array) public datalist!: any[];
    @Prop(String) public itemKey!: string;
    @Prop(String) public itemTitle!: string;
    @Prop(Function) public onEnter!: (params?: any) => any;
    private dirty: boolean = false;

    public get value() {
        const storeVal = this.$store.state.order[this.fieldId];
        return storeVal ? storeVal : '';
    }

    private beforeCreate() {
        this.$on('dirty', (event: boolean) => this.dirty = event);
    }

    // TODO: Don't just blankly set to to order field, make this a prop that get's passed;
    private onInput(event: InputEventTarget) {
        this.$emit('dirty', true);
        const payload = {
            key: this.fieldId,
            value: event.value
        };
        this.$store.commit('order/setOrderField', payload);
    }
}
</script>
