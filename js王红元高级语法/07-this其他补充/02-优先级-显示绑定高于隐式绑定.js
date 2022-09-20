var obj = {
  name: "why",
  foo: function () {
    console.log(this);
  }
}
obj.foo();
// call/apply显示绑定高于隐式绑定
obj.foo.call("abc");
obj.foo.apply("cba");
// 2.bind 隐式绑定
var bar = obj.foo.bind("nba");
bar();
// 3.更明显的比较 bind的优先级高于隐式绑定
function foo() {
  console.log(this);
}
var obj = {
  name: "obj",
  foo: foo.bind("aaa")
}
obj.foo();