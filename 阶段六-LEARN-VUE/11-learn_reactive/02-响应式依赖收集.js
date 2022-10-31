const obj = {
  name: "why",
  age: 18
}
function foo() {
  console.log("foo", obj.name);
  console.log("foo", obj.age);
}

function bar() {
  console.log("bar", obj.age + '10');
  console.log("bar", obj.name + "hello");
  console.log("bar function");
}


const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log("foo", obj.name);
  console.log("foo", obj.age);
})
watchFn(function bar() {
  console.log("bar", obj.age + '10');
  console.log("bar", obj.name + "hello");
  console.log("bar function");
})

// 修改obj的属性
console.log("name发生变化--------");
obj.name = "Kobe"
reactiveFns.forEach((fn) => {
  fn()
})