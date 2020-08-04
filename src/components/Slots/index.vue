<template>
  <div>
    <h2>插槽</h2>
    <Layout>
      <!-- 具名插槽 -->
      <template v-slot:header>头部</template>
      <!-- 匿名插槽 -->
      <template>中间</template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="{fc}">{{fc}}</template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./Layout";
export default {
  components: {
    Layout,
  }
};
</script>

<style lang="">
</style>