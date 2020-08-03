<template>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
</template>

<script>
export default {
    name: 'KInput',
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value)

             // 触发校验
            this.$parent.$emit('validate')
        }
    }
}
</script>

<style lang="">
    
</style>