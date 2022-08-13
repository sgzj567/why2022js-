import { name, age } from "./foo.js"
console.log(name, age);
setTimeout(() => {
  console.log(name, age);
}, 2000)
// commonjs 与esmodule 相互引用
// 1.在浏览器中不能
// 2.在node环境中需要区分版本
// 3.在平时开发中 webpack中 可以引用