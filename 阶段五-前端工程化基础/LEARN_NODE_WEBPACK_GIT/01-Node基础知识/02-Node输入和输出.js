console.log("Hello World");
const num1 = 100;
const num2 = 129;
console.log(num1 + num2);

// 输入内容 prompt
// 2.给程序输入内容
// console.log(process.argv);
// argv 是数组形式
const arg1 = process.argv[0];
const arg2 = process.argv[2];
const arg3 = process.argv[3];
console.log(arg1, arg2, arg3);//100 234 123
// setTimeout(() => {
//   console.clear();//清空控制台
// }, 3000);
console.trace();//  打印函数调用栈  node中使用