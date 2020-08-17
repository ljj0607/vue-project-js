<template>
  <Tree :data="treeData"></Tree>
</template>

<script>
import Tree from './Tree'
export default {
  data() {
    return {
      treeData: [
        {
          title: "Web",
          children: [
            {
              title: "h5",
            },
            {
              title: "JS",
              children: [
                {
                  title: "object",
                },
                {
                  title: "array",
                },
              ],
            },
            {
              title: "框架",
              children: [
                {
                  title: "Vue",
                  expand: true,
                  children: [
                    {
                      title: "组件化",
                    },
                    {
                      title: "源码",
                    },
                    {
                      title: "docker部署",
                    },
                  ],
                },
                {
                  title: "React",
                  children: [
                    {
                      title: "JSX",
                    },
                    {
                      title: "虚拟DOM",
                    },
                  ],
                },
                {
                  title: "Node",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
      Tree
  }
};
</script>

<style lang="">
</style>