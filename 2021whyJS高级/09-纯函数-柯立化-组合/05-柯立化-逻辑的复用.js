function makeAdder(count) {
  count++
  return function (num) {
    return count + num
  }
}
var result = makeAdder(5)(10);
console.log(result);

var adder5 = makeAdder(5);
// console.log(adder5);
// 对某些逻辑复用
var result1 = adder5(10);
console.log(result);