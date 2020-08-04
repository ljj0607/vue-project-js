<template>
    <div>
        <h2>组件通信</h2>
        <!-- props, 自定义事件 -->
        <Child1 msg="some msg from parent1" @some-event="onSomeEvent"></Child1>
        <Child2 msg="some msg from parent2" @some-event="onSomeEvent"></Child2>

    </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';
export default {
    // provide传递, 后代inject接收
    provide() {
        return {
            foo: '数据'
        }
    },
    components: {
        Child1,
        Child2
    },
    methods: {
        // 获取Child1里面的$emit值
        onSomeEvent(msg) {
            console.log(msg)
        }
    }
}
</script>

<style lang="">
    
</style>