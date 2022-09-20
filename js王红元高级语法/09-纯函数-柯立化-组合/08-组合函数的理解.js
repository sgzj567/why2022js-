function sum(num1) {
  return num1 * 2
}

function square(num2) {
  return num2 ** 2
}
var count = 10
var result = square(sum(10))
console.log(result);


// 实现最简单的组合函数n 与m是函数

function composeFn(n, m) {
  return function (count) {
    return m(n(count))
  }
}
var newFn = composeFn(sum, square);
var result1 = newFn(10)
console.log(result1);