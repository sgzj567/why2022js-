<template>
  <div>
    我叫{{ name }},今年{{ age }}身高{{ height }}
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
      name, age, height
    }
  }
}

</script>

<style lang="less" scoped>

</style>
