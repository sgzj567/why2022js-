// 给所有函数添加一个hycall方法
// 1.完成了call的第一个方法 是执行本身被调用函数的执行
// Function.prototype.hycall = function() {
//         // console.log("hycall被调用了");
//         // 在这里可以去执行调用的那个函数(foo)
//         // 问题:得到调用可以获得是哪个函数调用了hycall
//         var fn = this; //此时this是调用的函数
//         fn(); //此时这个函数是独立调用 所以如果给调用的函数赋值this则他是 window 全局对象
//     }

// 2.给其添加参数

Function.prototype.hycall = function (thisArg, ...arg) {
  // console.log("hycall被调用了");
  // 在这里可以去执行调用的那个函数(foo)
  // 问题:得到调用可以获得是哪个函数调用了hycall
  var fn = this; //此时this是调用的函数
  // 把函数赋值给参数  这里有个问题 如果参数是基本数据类型 那么他就么有方法 比如 number  string boolean
  // 解决方法:对thisArg进行转换为Object类型 Object()  但是此时有个bug 就是传入的是null undefined的话 也会转换为对象 而原来的call  的话就会输出window  解决办法 判断传入的值是否为空  三元运算
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  //  调用
  // thisArg.fn(...arg);
  // 如果执行函数有返回值 需要拿到结果
  var result = thisArg.fn(...arg)

  delete thisArg.fn
  return result
}

function foo() {
  console.log('foo函数被执行了', this);
}

function sum(num1, num2) {
  console.log('sum函数被执行了', this, num1, num2);
  var result = num1 + num2
  return result
}

// 系统的函数方法
foo.call('123');
foo.call(undefined); //window
foo.call(null); //window
// 自己设置的
foo.hycall('123');
foo.hycall(undefined);
foo.call(null);

var result = sum.call(123.67, 2, 90)
console.log('系统调用结果', result);
var result = sum.hycall(123.67, 2, 90)
console.log('自己调用结果', result);