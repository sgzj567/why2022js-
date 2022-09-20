var name = "window"
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss(); //window
  person.sayName(); //person 隐式调用
  (person.sayName)(); //隐式调用 person
  (b = person.sayName)(); //间接函数引用 独立函数  window:赋值表达式
}
sayName();