<template>
  <nav-bar>
    <!-- 具名插槽要写在template模板中 也就是多个插槽-->
    <template v-slot:left>
      <button>我是按钮</button>
    </template>

    <template v-slot:center>
      <span>我是center</span>
    </template>

    <template v-slot:right>
      <span>我是right</span>
    </template>
  </nav-bar>
  <hr>
  <!-- 采用默认插槽 -->
  <nav-bar>
    <template v-slot:[position]>
      <button>注册</button>
    </template>
  </nav-bar>

  <button @click="position = 'left'">左边</button>
  <button @click="position = 'center'">中间</button>
  <button @click="position = 'right'">右边</button>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  data() {
    return {
      position: "left"
    }
  },
  components: {
    NavBar,
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
