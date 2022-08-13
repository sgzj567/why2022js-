Function.prototype.hybind = function(thisArg, ...argArray) {
    // 1.获取到真是的调用函数
    var fn = this;
    // 2.绑定this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxFn(...args) {
        // 3.将函数放到thisArg中调用
        thisArg.fn = fn;
        // 4.对两个参数进行合并
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(...finalArgs);
        delete thisArg.fn;
        return result;
    }
    return proxFn
}



function foo() {
    console.log("foo函数被执行了", this);
}

function sum(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4);
}
// 系统的bind调用
// var bar = foo.bind('aaa');
// bar();

// var newSum1 = sum.bind("aaa", 10, 20, 30, 40);
// newSum1();

// var newSum2 = sum.bind("aaa", 10, 20);
// newSum2(30, 40);

// var newSum3 = sum.bind("aaa")
// newSum3(10, 20, 30, 40)

// hybind函数的调用
var newSum3 = sum.hybind("aaa")
newSum3(10, 20, 30, 40)

var newSum2 = sum.hybind("aaa", 10, 20);
newSum2(30, 40);