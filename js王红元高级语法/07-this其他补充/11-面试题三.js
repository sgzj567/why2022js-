var name = "window"

function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name);
  }
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    }
  },
    this.foo4 = function () {
      return () => {
        console.log(this.name);
      }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()//person1
person1.foo1.call(person2)//person2

person1.foo2()//person1
person1.foo2.call(person2)//person1

// person1.foo3()()
// person1.foo3.call(person2)()//拿到结果之后给独立调用 绑定的是foo3函数 不是return回去的函数
// person1.foo3().call(person2)

person1.foo4()()// 
person1.foo4.call(person2)()//
person1.foo4().call(person2)//
