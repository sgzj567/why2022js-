var obj = {
  name: "why",
  age: 19,
  _address: "北京市", //_下划线表示私有
}

// 1.影藏某个私有属性
// 2.如果希望某个属性访问或者设置的过程时 也会使用存取属性
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  get: function () {
    foo();
    return this._address
  },
  set: function (value) {
    foo2();
    this._address = value
  }
})

function foo() {
  console.log("获取了一次这个属性");
}

function foo2() {
  console.log("设置了一次这个属性");
}
console.log(obj._address);
obj._address = "上海市"
console.log(obj._address);