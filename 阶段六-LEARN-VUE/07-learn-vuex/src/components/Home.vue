<template>
  <div class="home">
    <h2>Counter模块的count:{{ $store.state.counterM.count }}</h2>
    <!-- 因为有了作用域所以要写具体 -->
    <h2>Counter模块的doubleCount:{{ $store.getters["counterM/doubleCount"] }}</h2>
    <button @click="changeCount">+1</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import store from '../store';

export default {
  // 
  methods: {
    // actionBtn() {
    //   // action里面使用dispatch mutations l里面使用commit
    //   this.$store.dispatch("incrementAction")
    // },
    // actionChangeName() {
    //   this.$store.dispatch("actionChangeName", "ldh")
    // }
    // ...mapActions(["actionBtn", "actionChangeName"])

  }
}
</script>
<script setup>
// 告诉vuex发起网络请求
import { useStore } from 'vuex';
const store = useStore()
// then是检查请求是否成功 但是 必须前面返回的是promise对象
function changeCount() {
  store.dispatch("counterM/incrementCountAction")
}

</script>

<style scoped>
</style>
