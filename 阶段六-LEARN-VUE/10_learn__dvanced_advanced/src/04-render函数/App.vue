<!-- <script >
import { h, ref } from 'vue'
export default {
  setup() {
    const count = ref(3)
    const add = () => { count.value++ }
    const sub = () => { count.value-- }
    return () => h("div", { className: "app" }, [
      h("h2", `当前计数${count.value}`),
      h("button", { onClick: add }, "+1"),
      h("button", { onClick: sub }, "-1"),
    ])
  }
}

</script> -->
<script setup>
import { h, ref } from 'vue'
const count = ref(3)
const add = () => { count.value++ }
const sub = () => { count.value-- }
const render = () => h("div", { className: "app" }, [
  h("h2", `当前计数${count.value}`),
  h("button", { onClick: add }, "+1"),
  h("button", { onClick: sub }, "-1"),
])
</script>
<template>
  <render></render>


</template>
<style scoped>

</style>
