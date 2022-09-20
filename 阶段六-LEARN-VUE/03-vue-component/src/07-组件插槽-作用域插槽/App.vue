<template>
  <tab-control :titles="['衣服', '鞋子', '裤子']" @addClass="tabClick" />
  <h2>{{ pageContent[currentIndex] }}</h2>

  <!-- 作用域插槽 -->
  <tab-control :titles="['衣服', '鞋子', '裤子']" @addClass="tabClick">
    <!-- 子组件 -->
    <template #default="props">
      <!-- props.item的item是传过来的值不是属性 props包含子组件的属性 但是如果子组件有name属性 就会保留到子组件 不会传过来-->
      <button>{{ props.item}}</button>
    </template>
  </tab-control>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      pageContent: ['衣服专区', '鞋子专区', '裤子专区'],
      currentIndex: 0,
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      console.log(this.currentIndex);

    }
  }
}
</script>

<style scoped>
</style>
