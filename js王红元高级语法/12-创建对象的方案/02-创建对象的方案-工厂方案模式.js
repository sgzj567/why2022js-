function createPerson(name, age, address) {
  var p = {}
  p.name = name,
    p.age = age,
    p.address = address,
    p.running = function () {
      console.log(this.name + "在跑步")
    }

  return p
}

var p1 = createPerson("zs", "18", "北京市")
var p2 = createPerson("ls", "19", "广东市")
var p3 = createPerson("ww", 17, "上海市")
console.log(p1, p2, p3);

// 工厂模式的缺点(获取不到对象真实的类型)