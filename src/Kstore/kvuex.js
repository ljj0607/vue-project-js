// 1、实现插件
let _Vue;

class Store {
    constructor(options = {}) {
         // 4、保存用户配置的mutations选项
         this._mutations = options.mutations || {}

         // 实现actions：根据⽤户传⼊type获取并执⾏对应action
         // 保存⽤户编写的actions选项    
         this._actions = options.actions || {}

        
        // 3、创建响应式的state
        this._vm = new _Vue({
            data(){
                // 不希望代理， 就加上$
                return {
                    $$state: options.state
                }
            }
        })

        this.getters = {}
       
    }
    get state() {
        return this._vm._data.$$state
    }

    set state(v) {    
        console.error('please use replaceState to reset state');  
    } 

    commit = (type, payload) => {
        // 获取type对应的mutation
        const entry = this._mutations[type]

        if (!entry) {      
            console.error(`unknown mutation type: ${type}`);     
            return    
        }    
        // 指定上下⽂为Store实例    
        // 传递state给mutation    
        entry(this.state, payload); 

    }

    dispatch = (type, payload) => {
        // 获取⽤户编写的type对应的action    
        const entry = this._actions[type]
        if (!entry) {
            console.error(`unknown action type: ${type}`);
            return
        }
        // 异步结果处理常常需要返回Promise   
        return entry(this, payload);
    }


}

function install(Vue) {
        _Vue = Vue

        // 2、全局混入
        Vue.mixin({
            beforeCreate() {
                if (this.$options.store) {
                    Vue.prototype.$store = this.$options.store
                }
            },
        })
}

// 导出对象就是vuex
export default { Store, install};