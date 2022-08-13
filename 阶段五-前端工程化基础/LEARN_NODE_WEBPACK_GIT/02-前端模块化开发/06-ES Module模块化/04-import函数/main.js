// import { name, age } from "./foo.js"
// 先解析foo.js 运行  再导入  后续的代码是不会执行的  也就是同步执行的
// 为了不影响后续代码执行  import也是个函数 他返回一个promise函数
import("./foo.js").then(res => {
  console.log("res", res.name);
})
// import导入的时候不能修改值  限制允许导出的时候修改