var name = "window"
var person1 = {
    name: "person1",
    foo1: function() {
        console.log(this.name);
    },
    foo2: () => console.log(this.name),
    foo3: function() {
        return function() {
            console.log(this.name);
        }
    },
    foo4: function() {
        return () => {
            console.log(this.name);
        }
    }

}
var person2 = { name: "person2" }

person1.foo1(); //person1 隐式绑定
person.foo1.call(person2); //person2 显示绑定大于隐式绑定

person1.foo2(); //window(对象不绑定作用域  上层作用域是全局)
person1.foo2.call(person2); //  因为此时箭头函数不绑定对象 所以call 在这里无效 window

person1.foo3()(); //window(独立函数调用)
person1.foo3.call(person2)(); //window(独立函数调用)
person1.foo3().call(person2); //person2

person1.foo4()(); // 此时箭头函数里的上层作用域是 foo4中的function 而他此时的this是person对象 所以这里输出 person1
person1.foo4.call(person2)(); //person2
person1.foo4().call(person2); //person1