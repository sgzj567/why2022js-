function add(num1, num2) {
  return num1 + num2
}
function sub(num1, num2) {
  return num1 - num2
}
const bar = () => {
  console.log("我是bar函数");
}
const message = "Hello world"
module.exports = {
  add, sub, message, bar
}