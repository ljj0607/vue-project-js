<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  //使用provide传递当前组件实例
  // inject在后代组件中接收组件
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  methods: {
    validate(cb) {
      // 检查所有表单项目
      // 他们都要校验通过
      // 获得一个Promise数组
      const tasks = this.$children
        .filter((item) => item.prop) // 必须拥有prop属性的FormItem留下
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    },
  },
};
</script>

<style lang="">
</style>