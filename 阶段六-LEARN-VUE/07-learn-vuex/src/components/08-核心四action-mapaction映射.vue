<template>
  <div class="home">
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <h2>当前name:{{ $store.state.name }}</h2>
    <button @click="incrementAction">发起action</button>
    <button @click="actionChangeName">修改name</button>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';
// import store from '../store';

// export default {
//   methods: {
    // actionBtn() {
    //   // action里面使用dispatch mutations l里面使用commit
    //   this.$store.dispatch("incrementAction")
    // },
    // actionChangeName() {
    //   this.$store.dispatch("actionChangeName", "ldh")
    // }
    // ...mapActions(["actionBtn", "actionChangeName"])

//   }
// }
</script>
<script setup>
import { useStore, mapActions } from 'vuex';
const store = useStore()
// 法一使用辅助函数
// const newActions = {}
// const actions = mapActions(["incrementAction", "changeNameAction"])
// Object.keys(actions).forEach(key => {
//   newActions[key] = actions[key].bind({ $store: store })
// })
// const { incrementAction, actionChangeName } = newActions
// 法二: 使用默认以前做法
// const store = useStore()
function actionChangeName() {
  store.dispatch("actionChangeName", 'aaa')
}
function incrementAction() {
  store.dispatch("incrementAction")
}


</script>

<style scoped>

</style>
