// 配置路劲别名
import { add } from "./utils/abc/cba/nba/math";
console.log(add(89, 34));
// import { createApp } from 'vue/dist/vue.esm-bundler'//compile代码 编译非.vue里面的template
// 默认.vue的文件渲染是webpack带的vue.loader+runtime渲染template 拿过来直接做好了
import { createApp } from 'vue';
import App from './App.vue'
// const App = {
// 自定义版本 是runtime+compile
// 如果把模板写在这里就需要引入....esm-bundler
// 渲染过程 vue源码compile->vCreateNode()->vNode->vDom->
//   data() {
//     return {

//     }
//   }
// }
createApp(App).mount("#app")
