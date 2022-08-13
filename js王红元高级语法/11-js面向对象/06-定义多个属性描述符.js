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
console.log(obj._age);
obj._age = 19;
console.log(obj._age);
console.log(obj);