// 作为⼀个插件存在：实现VueRouter类和install⽅法 
// 实现两个全局组件：router-view⽤于显示匹配组件内容，router-link⽤于跳转 
// 监控url变化：监听hashchange或popstate事件 
// 响应最新url：创建⼀个响应式的属性current，当它改变时获取对应组件并显示
 
let _Vue;

// 保存选项
class VueRputer {
    constructor(options) {
        this.$options = options

        // 4、定义响应式的属性current
        const install = window.location.hash.slice(1) || '/';
        _Vue.util.defineReactive(this, 'current', install)


        // 6、缓存path和route映射关系
        this.routeMap = {};
        this.$options.routes.forEach(route => {      
            this.routeMap[route.path] = route    
        })

        // 5、监听url变化
        // 监听hashchange事件
        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }
    onHashChange() {
        this.current = window.location.hash.slice(1)
        console.log(this.current)
    }
}

    

// 插件：实现install方法，注册$router
VueRputer.install = function(Vue) {
    // 引用构造函数，在上面VueRputer中使用
    _Vue = Vue;

    // 1、挂载$router
    Vue.mixin({
        beforeCreate() {
            // 只有根组件拥有router选项
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        },
    })

    // 2、实现两个全局组件router-link、router-view
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render(h) {
            return h('a', {
                attrs: {
                    href: '#' + this.to
                }
            },this.$slots.default)
        }
    })
    Vue.component('router-view', {
        render(h) {
            // 7、动态获取对应组件
            const { routeMap, current } = this.$router
            const component = routeMap[current] ? routeMap[current].component : null;
            return h(component)
        }
    })
}


export default VueRputer