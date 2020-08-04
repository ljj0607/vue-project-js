<template>
    <div @click="$emit('some-event', 'child1')">
        {{msg}}
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: [String, Number],
            default: ""
        }
    },
    mounted() {
        // 接收
        this.$bus.$on('event-from-child2', msg => {
            console.log(msg)
        })
    }
}
</script>

<style lang="">
    
</style>