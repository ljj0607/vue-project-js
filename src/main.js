import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

Vue.use(Element)

new Vue({
  render: h => h(App),
}).$mount('#app')
