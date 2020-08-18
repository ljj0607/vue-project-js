import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
// import router from './router'
import router from './krouter'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

Vue.use(Element)

new Vue({
  // 挂载，目的是什么？让我们可以在插件中访问到Router实例
  router,
  render: h => h(App),
}).$mount('#app')
