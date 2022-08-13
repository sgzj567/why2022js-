let name = "why";
let age = 19;
export {
  name, age
}
// 要想在导入的时候看到修改的值  只能在导出的时候修改
setTimeout(() => {
  name = "kobe";
  age = "20"
}, 1000)