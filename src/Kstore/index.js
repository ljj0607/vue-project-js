import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态、数据 
  state: {
    counter: 0
  },
  //更改状态的函数
  mutations: {
    add(state) {
      state.counter++
    }
  },
  //异步操作 , 添加业务逻辑
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    } 
  },
  //包含以上概念的容器
  modules: {
  },
  // 从state派⽣出新状态，类似计算属性
  getters: {
     // 计算剩余数量
    doubleCounter(state) {
      return state.counter * 2;
    }
  }
})
