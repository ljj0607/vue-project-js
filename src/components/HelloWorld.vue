<template>
    <div>
        <!-- 组件通信 -->
        <!-- <Communication /> -->

        <!-- form表单 -->
        <!-- <Form /> -->

        <!-- 插槽 -->
        <!-- <Slots></Slots> -->

        <!-- tree递归 -->
        <Recursion />
        
    </div>
</template>

<script>
import Communication from './Communication'
import Form from './Form'
import Slots from './Slots'
import Recursion from './Recursion'
export default {
    name: 'HelloWorld',
    components: {
        Communication,
        Form,
        Slots,
        Recursion
    }
}
</script>

<style>
    
</style>