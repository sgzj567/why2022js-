function foo() {
    console.log(this);
}
foo.apply("apply")
foo.apply({});
// window  会忽略null 与undefined绑定
foo.apply(null);
foo.apply(undefined);
var bar = foo.bind(null);
bar();