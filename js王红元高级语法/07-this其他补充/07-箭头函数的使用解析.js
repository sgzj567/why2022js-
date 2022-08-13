// 1.编写箭头函数
(num1, num2, num3) => {

}
// 1>:()参数
// 2>:=>箭头
var foo = function() {

}
var nums = [10, 20, 33, 34]
nums.forEach(() => {})
    // 高阶函数在使用的时候 也可以传入箭头函数
var nums = [13, 23, 546, 44]
nums.forEach((item, index, arr) => {
    console.log(item, index);
})
console.log("---------------------------------");
// 箭头函数的简写
// 简写1:如果只有一个参数 (),可以省略
nums.forEach(item => {
        console.log(item);
    })
    // 简写2:如果函数执行体只有一行代码 那么{}也可以省略
    // 强调:并且它会默认将这行代码执行结果作为返回值
nums.forEach(item => console.log(item))
var result = nums.filter(item => item % 2 === 0)
console.log(result);
// map/filter/reduce
var result1 = nums.filter(item => item % 2 === 0).map(item => item * 100).reduce((preValue, item) => preValue + item)
console.log(result1);
// 简写3:如果一个箭头函数 只有一行代码  并且返回一个对象  这个时候如何编写简写
var bar = () => ({ name: "why", age: 18 }) //此时{}里面是执行体
bar();