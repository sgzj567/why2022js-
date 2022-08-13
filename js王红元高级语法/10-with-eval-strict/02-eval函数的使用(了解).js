// var message = "Hello World"
// console.log(message);
// 不建议使用 会有安全隐患  原因
// 1.可读性差  2.eval是一个字符串  有可能在执行过程中被篡改   3.eval 必须经过js解释器  不能被js引擎优化
// eval 是一个特殊的函数  也是一个全局函数 他可以将传入的字符串 当做JavaScript代码来使用
var jsString = 'var message ="Hello World";console.log(message);'
eval(jsString)