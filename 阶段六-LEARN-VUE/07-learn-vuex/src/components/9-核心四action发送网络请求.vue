<template>
  <div class="home">
    <template v-for="item in $store.state.banners" :key="item.width">
      <li> title:{{ item.title }} </li>
    </template>
    <template v-for="item in $store.state.recommend" :key="item.width">
      <li>
        <img :src="item.image" alt="">
      </li>
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
  console.log("then被回调");
})


</script>

<style scoped>

</style>
