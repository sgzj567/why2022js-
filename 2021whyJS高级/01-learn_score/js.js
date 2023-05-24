console.log(i); //undefined
// i是函数外部的 所以i是全局变量
for (var i = 0; i < 10; i++) {}
console.log(i); //10