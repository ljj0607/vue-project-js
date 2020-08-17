<template>
    <div>
        <div @click="togger" :style="{paddingLeft: (level-1)+'em'}">
            <label>{{model.title}}</label>
            <span v-if="isFolder"> {{ open ? '-' : '+'}}</span>
        </div>
        <div v-show="open" v-if="isFolder">
            <tree-node v-for="model in model.children" :key="model.title" :model="model" :level="level + 1"></tree-node>
        </div>
    </div>
</template>

<script>
export default {
    name: "tree-node",
    props: {
        model: Object,
        level: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        togger() {
            if (this.isFolder) {
                this.open = !this.open
            }
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length
        }
    },
}
</script>

<style lang="">
    
</style>