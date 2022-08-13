var obj = {
    name: "why",
    foo: function() {
        console.log(this);
    }
}
var p = new obj.foo(); //foo
// new 优先级高于显示绑定