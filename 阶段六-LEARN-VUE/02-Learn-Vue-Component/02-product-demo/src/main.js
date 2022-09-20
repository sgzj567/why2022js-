// 配置路劲别名
import { add } from "./utils/abc/cba/nba/math";
console.log(add(89, 34));
// import { createApp } from 'vue/dist/vue.esm-bundler'//compile代码 编译非.vue里面的template
// 默认.vue的文件渲染是webpack带的vue.loader+runtime渲染template 拿过来直接做好了
import { createApp } from 'vue';
import App from './App.vue'
// const App = {
// vue.esm-bundler 是runtime+compile解析template
// 默认版本是runtime+vue-loader完成template编译
// 如果把模板写在这里就需要引入....esm-bundler
// createNode需要vue中的源码来完成  但是在.vue中template的通过webpack中打包时候的有vue-loader完成了createVNode的过程  但是在这里js中写template没有
// 渲染过程 vue源码compile解析->vCreateNode()调用->vNode->vDom->渲染成真实dom
// template:`<h2>hello vue3</h2>`
//   data() {
//     return {

//     }
//   }
// }
createApp(App).mount("#app")
