<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left {
  flex: 1;
  background-color: antiquewhite;
}

.center {
  flex: 3;
  background-color: aquamarine;
}

.right {
  flex: 1;
  background-color: antiquewhite;
}

.left,
.center,
.right {
  text-align: center;
  height: 44px;
  line-height: 44px;
}
</style>
