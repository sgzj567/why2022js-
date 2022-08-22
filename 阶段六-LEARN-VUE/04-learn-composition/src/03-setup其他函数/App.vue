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
    function changeInfo(name) {
      info.name = name
    }
    // 使用readonly包裹进行数据单向传递
    const roInfo = readonly(info)
    return {
      info, changeInfo, roInfo,
    }
  }
}
</script>

<style scoped>
</style>
