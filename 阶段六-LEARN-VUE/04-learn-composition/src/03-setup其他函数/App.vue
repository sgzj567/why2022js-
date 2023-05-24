<template>
  <show-info :info="info"></show-info>
  <show-info :info="info" :roInfo="roInfo" @changeInfo="changeInfo"></show-info>
</template>


<script>
import ShowInfo from './ShowInfo.vue';
import { reactive, readonly } from 'vue';
export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({
      name: "why",
      age: 19,
      height: 1.88,
    });
    function changeInfo(n) {
      info.name = n
    }
    // 使用readonly包裹进行数据单向传递 readOnly对象一般传入ref reactive 对象 reactive readonly对象返回的是Proxy对象 isProxy是检查对象是否由Reactive和readonly创建的Proxy isReactive检查对象是否由reactive创建的响应式代理 如果该对象是由readonly建的 但包裹了有reactive创建的另一个代理 也会返回true
    const roInfo = readonly(info)
    return {
      info, changeInfo, roInfo,
    }
  }
}
</script>

<style scoped>

</style>
