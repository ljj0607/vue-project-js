<template>
    <div class="kkb-tree">
        <TreeNode v-for="item in data" :key="item.title" :model="item"></TreeNode>
    </div>
</template>

<script>
import TreeNode from './TreeNode'
export default {
    components: {
        TreeNode
    },
    props: {
        data: {
            type: Array,
            require: true
        }
    }
}
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>