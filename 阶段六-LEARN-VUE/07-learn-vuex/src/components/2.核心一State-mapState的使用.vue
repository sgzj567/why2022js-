<template>
  <div class="home">
    <!-- 在模板中直接使用多个状态 -->
    <h2>name:{{ $store.state.name }}</h2>
    <h2>level:{{ $store.state.level }}</h2>
    <h2>avatarURL:{{ $store.state.avatarURL }}</h2>
    <!-- 数组形式mapState 中计算属性映射状态-->
    <!-- <h1 :style="{ color: 'red' }">computed mapState数组中使用</h1>
    <h2>name:{{ name }}</h2>
    <h2>level:{{ level }}</h2> -->
    <!-- <h2>avatarURL:{{ avatarURL }}</h2> -->
    <!-- <h1 :style="{ color: 'purple' }">mapState对象中使用</h1>
    <h2>name:{{ sName }}</h2>
    <h2>sLevel:{{ sLevel }}</h2> -->

    <!-- 4.在setUp中使用mapState -->
    <h2>name:{{ cname }}</h2>
    <h2>level:{{ clevel }}</h2>
  </div>
</template>
<!-- <script>
// 导入映射State
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(["name", "level", "avatarURL"]),
    // 对象中可以修改传过来的值
    ...mapState({
      sName: state => state.name,
      sLevel: state => state.level
    })
  }
}



</script> -->
<script setup>
import { computed, toRefs } from 'vue';
import { mapState, useStore } from 'vuex';
// mapState返回的是函数
// const { name, level } = mapState(["name", "level"])
// console.log(fns);
// const cname = computed(name)
// const clevel = computed(level)
// 3.直接对storeState进行结构
const store = useStore()
// 但是接收到的不是响应式 需要转换为响应式
const { name: cname, level: clevel } = toRefs(store.state)
</script>

<style scoped>
</style>
