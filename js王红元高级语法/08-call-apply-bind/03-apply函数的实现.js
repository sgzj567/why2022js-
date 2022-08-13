Function.prototype.hyapply = function (thisArg, argArray) {
  // 1.获取调用的函数
  var fn = this
  // 2.判断thisArg是否非基本数据类型 此时这里有个bug 如果传入是0 就会当做null 解决办法
  // thisArg = thisArg ? Object(thisArg) : window;
  // 解决传入是0的方法
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
  thisArg.fn = fn;

  // 如果调用的函数没有传参数 就会报错 解决办法  判断是否有参数
  var result
  // 法1:
  // if (!argArray) {
  //     result = thisArg.fn
  // } else {
  //     result = thisArg.fn(...argArray)

  // }
  // 法2:
  argArray = argArray ? argArray : []
  result = thisArg.fn(...argArray)
  delete thisArg.fn;
  // 返回结果
  return result
}
// 1.有参数
function sum(num1, num2) {
  console.log("sum函数被执行了", this, num1, num2);
  var result = num1 + num2;
  return result
}
// 2.没有参数
function bar() {
  console.log("bar函数被执行了", this);
}
// 系统调用
var result = sum.apply('系统调用的函数', [78, 20]);
console.log(result);


// 自定义函数调用
var result1 = sum.hyapply('hyapply调用的函数', [78, 20])
console.log(result1);

//  自定义函数 调用没有参数的
bar.hyapply('abc')
bar.hyapply(0)