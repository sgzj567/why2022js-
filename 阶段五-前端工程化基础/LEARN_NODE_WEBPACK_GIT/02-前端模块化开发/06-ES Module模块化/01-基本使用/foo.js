// 第一种导出方式
// export const name = "why"
// export const age = 19;

// 第二种:export 导出和声明分开
const name = "why";
const age = 19;
function foo() {
  console.log("foo function");
}

// const obj = {
//   name: "zxk"
// }
export {
  name, foo, age
}

// 第三种 第二种导出的时候起别名
// export {
//   name as fName,
//   age as fAge,
//   foo as fFoo,
// }