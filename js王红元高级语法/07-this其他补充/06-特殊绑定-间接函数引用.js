var obj = {
    name: "why",
    foo: function() {
        console.log(this)
    }
}
var obj1 = {
    name: "obj1",
}
obj1.bar = obj.foo
obj1.bar()