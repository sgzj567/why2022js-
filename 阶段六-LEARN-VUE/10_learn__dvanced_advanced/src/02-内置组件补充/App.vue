<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <suspense>
          <template #default>
            <async-home></async-home>
          </template>
          <template #fallback>
            <h2>我是h2</h2>
          </template>
        </suspense>

      </p>
    </div>

  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const AsyncHome = defineAsyncComponent(() => import("./AscyncHome.vue"))
</script>

<style lang="less" scoped>

</style>
