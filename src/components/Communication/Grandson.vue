<template>
    <div @click="$emit('some-event', 'grandson')">
        {{msg + ' grandson'}}
        {{foo1}}
    </div>
</template>

<script>
export default {
    // 接收
    inject: {
        foo1: {
            from: 'foo'
        }
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
}
</script>