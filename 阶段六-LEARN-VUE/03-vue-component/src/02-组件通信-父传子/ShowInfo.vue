<template>
  <div class="info">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>身高:{{ height }}</h2>
    <h2>信息:{{ showMessage }}</h2>
  </div>

</template>

<script>

export default {
  // 接受父组件传过来的属性 父组件传值 子组件接受
  // props数组语法 弊端不能对参数不能验证
  // props:["name","age","height"]
  // props对象语法 Number String Object Symbol function array
  props: {
    name:
    {
      // 设置默认值
      type: String,
      default: "zxk",
    },
    age: {
      type: Number,
      // 必传 就不能使用默认值 两个不能一起使用
      // require:true,
      default: 19
    },
    height: {
      type: Number,
      default: 1.88,
    },
    friends: {
      // 如果是对象类型
      type: Object,
      // default 必须是函数类型
      default() {
        return {
          message: "hello"
        }
      }
    },
    hobbies: {
      type: Array,
      default: () => {
        return ["kobe", "ldh"]
      }
    },
    showMessage: {
      type: String,
      default: "我是默认信息"
    }
  }
}
</script>

<style scoped>
</style>
