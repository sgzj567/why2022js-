console.log(this);
console.log(global);
// node 中的全局对象是global
// 特殊的全局对象
console.log(__dirname);//获取当前文件的目录路径
// 打印名称 并且包含目录结构
console.log(__filename);
// 3.模块化时学习
// console.log(module);
// console.log(exports);
// console.log(require);


// 4.常见的全局对象
// console.log(process);//进程信息
// 额外补充 Immediate:立即立刻
setImmediate(() => {
  console.log("Immediate");
})

// 额外执行函数
process.nextTick(() => {
  console.log("nextClick");
})
// globalThis 在浏览器中是全局对象那 在node也是全局对象  最新的ECMA中统一