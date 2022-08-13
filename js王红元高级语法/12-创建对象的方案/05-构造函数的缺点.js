function foo() {
  function bar() {

  }
  return bar
}
// 会产生两次对象
var p1 = foo()
var p2 = foo()
// 每次执行一次函数就会创建一个 所以下面的不是相等的
console.log(p1 === p2);