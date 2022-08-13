var s = 'aaa';
if (typeof s == 'string') {
    console.log('我是字符串');
} else {
    console.log('我不是字符串');
}

// 测试2
var value = 1;

function foo(x, y) {
    console.log(this.value)
}
var obj = {
    value: 2,
    foo: foo
}
foo.call(obj, 3, 4); // 2  3 4对应的是x y

// 相当于
obj.foo(3, 4);
// 展开运算符
var names = ["abc", "nba", "cba"];

function foo(name1, name2, name3) {}
foo(...names)