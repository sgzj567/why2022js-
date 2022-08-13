var names = ['abc', 'cba', 'nba', 'dna']

// slice 截取数组 slice(start,end)下标是 截取的起始位置 与终止位置(但是不包含终止位置数字) 原来数组不发生改变 
// 确定的输入 产生确定的输出
var nameName1 = names.slice(0, 1);
console.log(nameName1);
console.log(names); //原来数组不发生改变  所以它是纯函数

// splice 截取数组 slice(start,end)下标是 截取的起始位置 与终止位置(包含终止位置数字) 原来数组发生改变 
// 修改了原来的数组 所以不是纯函数  开发中尽量使用纯函数
var nameName2 = names.splice(2);
console.log(nameName2);
console.log(names);