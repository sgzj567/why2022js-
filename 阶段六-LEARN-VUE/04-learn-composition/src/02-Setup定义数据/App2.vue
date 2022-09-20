<template>
  <form action="">
    账号:<input type="text" v-model=count.userName>
    密码:<input type="password" v-model=count.password>
  </form>
  <!-- ref -->
  <form action="">
    账号:<input type="text" v-model=countName>
    密码:<input type="password" v-model=passWord>
  </form>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
export default {
  setup() {
    // ref 定义从网络当中获取的数据
    const musics = ref([])
    onMounted(() => {
      const serveMusics = ["海阔天空", "遇见"]
      musics.value = serveMusics
    })
    // ref定义本地简单数据 
    const passWord = ref(1234)
    const countName = ref("kobe")
    // reactive应用于本地数据 多个数据之间有联系的(总结的)
    const count = reactive({
      userName: "why",
      password: 1235
    })
    return {
      count, passWord, countName
    }
  }
}
</script>

<style scoped>
input {
  outline-style: none;
}
</style>
