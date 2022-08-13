function foo(...arg) {
    // 1.自己遍历
    // var newArr = [];
    // for (var i = 0; i < arguments.length; i++) {
    //     newArr.push(arguments[i] * 10)
    // }
    // console.log(newArr);
    // 将arguments转为数组
    // 2.1自己遍历 将arguments中的所有元素 放到数组里
    // 2.2 法二
    // var newArr = Array.prototype.slice.call(["aa", "bb", "cc"], 1, 3)
    var newArr = Array.prototype.slice.call(arguments)
    console.log(newArr);
    var newArr3 = [].slice.call(arguments)
    console.log(newArr3);
    // 2.3es6中的语法
    var newArr4 = Array.from(arguments);
    console.log(newArr4);

    var newArr5 = [...arguments]
    console.log(newArr5);

}
foo(10, 20, 30, 40)

// slice是数组中的一个方法 截取开始位置 和结尾位置 但是不包含结尾位置
Array.prototype.hyslice = function(start, end) {
    var arr = this;
    start = start || 0;
    end = end || arr.length;
    var newArr = [];
    for (var i = start; i < end; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}
var newArray = Array.prototype.hyslice.call(["aaa", "bbb", "ccc"], 1, 3)
console.log(newArray);