function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}]:[${message}]`);
};


function makeAdder(count) {

  return function (num) {
    return count + num
  }
}

function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

function foo(m, x, y, z) {
  return m + x + y + z;
}

// 拿到函数参数的个数
// console.log(foo.length);

// 函数柯立化函数的实现

// 剩余参数...arg本身就是数组形式
function hyCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接受的参数个数  和参数需要接受的个数是否一致
    // 1.当已传入的参数  大于等于需要的参数时  就执行函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      function curried2(...args2) {
        return curried.apply(this, args.concat(args2))
      }
      return curried2
    }
  }
  return curried
}
var curryAdd = hyCurrying(add);

console.log(add(10, 20, 30));
console.log(curryAdd(10, 20, 30));
console.log(curryAdd(10)(20)(30));