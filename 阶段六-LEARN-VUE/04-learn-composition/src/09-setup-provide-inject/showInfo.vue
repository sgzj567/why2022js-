<template>
  <div>
    {{name}}{{age}}
  </div>
</template>

<script >
import { inject } from 'vue';

export default {
  setup() {
    const name = inject("name")
    const age = inject("age")
    // 给个默认值
    const height = inject("height", 1.88)
    console.log(name.value);
    return {
      name, age
    }
  }
}

</script>

<style lang="less" scoped>

</style>
