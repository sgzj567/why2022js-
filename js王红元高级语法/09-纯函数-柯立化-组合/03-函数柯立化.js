// 只传递函数的一部分参数 来调用它,让他返回一个函数去处理剩余的参数;此过程就是函数的柯立化
// 为什么需要柯立化 因为需要一个函数处理的问题尽可能单一 


function foo(m, x, y, z) {
  return m + x + y + z;
}

var result1 = foo(2, 45, 32, 90);
console.log(result1);
// 将上述函数柯立化了
function bar(m) {

  return function (x) {
    return function (y) {
      return function (z) {
        return m + y + x + z
      }
    }
  }
}
var result = bar(2)(45)(32)(90)
console.log(result);

// 简化柯立化代码
var sum2 = m => x => z => y => {
  return m + x + y + z
}
console.log(sum2(2)(45)(32)(90));

var sum3 = x => y => m => z => x + y + m + z;
console.log(sum3(2)(45)(32)(90));