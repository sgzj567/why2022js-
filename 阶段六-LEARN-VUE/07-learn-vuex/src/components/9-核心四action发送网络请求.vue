<template>
  <div class="home">
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <h2>当前name:{{ $store.state.name }}</h2>
    <button @click="actionBtn">发起action</button>
    <button @click="actionChangeName">修改name</button>
    <template v-for="item in $store.state.banners" :key="item.width">
      <li> title:{{ item.title }} </li>
    </template>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import store from '../store';

export default {
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
store.dispatch("fetchHomeMultidataAction").then(res => {
  console.log("aaa");
})


</script>

<style scoped>
</style>
