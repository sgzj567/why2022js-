function foo(...arg) {
    // 数组中对象(长得像是一个数组 本质是一个对象):arguments
    console.log(arguments);
    // 常见的arguments的操作 有三个
    // 1.获取长度
    console.log(arguments.length);
    // 2.根据索引值获取某个参数
    console.log(arguments[0]);
    // 3.callee获取当前的arguments所在的函数
    console.log(arguments.callee);
}

foo(10, 20, 30, 40)