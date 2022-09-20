var name = "why"

var foo = () => {
  console.log(this);
}
// 箭头函数中的显示 隐式 默认绑定
foo();
var obj = { foo: foo };
obj.foo();
foo.call('abc');
// 2.应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求  将结果放到data上面
    // 在箭头函数之前解决方案
    // _this=this,//这里的this是obj 并且这里形成闭包
    // setTimeout(function(){
    //   var result=["abc","bca","nba"]
    //   // this.data=result;//此时这里的this是全局对象 window
    //   _this.data=result
    // },2000)
    // 箭头函数之后
    setTimeout(() => {
      var result = ["abc", "bac", "nba"]
      this.data = result //因为箭头函数不绑定this 所以这里的this是按着上层作用域往上查找
    }, 2000)
  }
}