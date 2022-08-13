//  入口文件
import { createApp } from "vue";
// vue 这个后缀名必须加 如果配置了就不需要加
import Hello from "./vue-demo/Hello"
import { add, sub, message, bar } from "./utils/math"
// import "./component/cpns"
console.log(add(23, 12));
console.log(sub(23, 9));
const foo = () => {
  console.log("foo function");
}
console.log(message.length);
bar()
foo()
createApp(Hello).mount("#app")
console.log(counter);
console.log(coderwhy);
