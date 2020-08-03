<template>
  <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" placeholder="请输入密码" />
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
        </KFormItem>
    </KForm>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";
export default {
  name: "index",
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      rules: {
        username: [{
            required:true,
            message:'必须输入用户名',
            pattern: /^[0-9a-z]{1,3}$/
        }],
        password: [{required:true,message:'必须输入密码'}]
      }
    }; 
  },
  methods: {
      login() {
          this.$refs.loginForm.validate(isValid => {
              console.log(isValid)
          })
        //   this.$refs.loginForm.validate(isValid => {
        //       console.log(isValid)
        //   })
      }
  }
};
</script>

<style lang="">
</style>