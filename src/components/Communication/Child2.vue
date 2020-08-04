<template>
    <div>
        <!-- $attrs -->
        {{$attrs.msg}}
        <!-- 隔代传参,v-bind会展开$attrs -->
        <!--   
            v-bind="$attrs" 传递所有属性
            v-on="$listeners" 传递所有事件
        -->
        <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
        <button @click="sendToChild1">给child1发送信息</button>
    </div>
</template>

<script>
import Grandson from './Grandson'
export default {
    components: {
        Grandson
    },
    methods: {
        sendToChild1() {
            // 利用事件总线给child1发送信息, 使用this.$bus.$on接收
            this.$bus.$emit("event-from-child2", "child2");
        }
    }
}
</script>