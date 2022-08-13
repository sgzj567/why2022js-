const name = "why";
const age = "19";

const foo = "foo value"

// 1.默认导出方式一
// export {
//   name, age, foo as default
// }
// 2.默认导出二  只能有一个默认导出
export default foo
export { name, age }
