const name = "foo";
const age = 18;
function sayHello() {
  console.log("sayHello");
}
// module.exports导出
// module.exports.name = name;
// module.exports.age = age;
// module.exports.sayHello = sayHello;


console.log(exports === module.exports);//true

// 开发中常见的写法  就是重新创建了个相同对象 改变exports. 不影响后续
module.exports = {
  name, age, sayHello
}
// module.exports.name = "zxk" 这个会修改后续变量
// exports.name = "why"  这个不会修改后续结果  因为require拿到的是module.exports 中的  默认是一样的但是  新建了之后就是不同的对象