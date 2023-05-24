var obj = {
  _age: 18, //在js中并没有严格意义的私有属性
  _eating: function () {}
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "why",
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._age
    },
    set: function (value) {
      this._age

    }
  }
})

function foo() {
  console.log("设置了age属性");
}
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// 获取所有对象的属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));