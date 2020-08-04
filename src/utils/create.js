import Vue from 'vue';
// import Notice from '@/components/Notice.vue'
// Component - 组件配置对象
// props - 传递给它的属性
function create(Component, props) {
    // 继承组件
    const Ctor = Vue.extend(Component);
    // 传入props
    const comp = new Ctor({ propsData: props});
    // 转换vnode为真实节点$el
    comp.$mount();
    // 挂载到body上
    document.body.appendChild(comp.$el);
    comp.remove = () => {
        // 移除dom
        document.body.removeChild(comp.$el);
        // 销毁组件
        comp.$destroy;
    }
    return comp
}

export default create


// export default {  install(Vue) {    Vue.prototype.$notice = function (options) {      return create(Notice, options)    }  } }
