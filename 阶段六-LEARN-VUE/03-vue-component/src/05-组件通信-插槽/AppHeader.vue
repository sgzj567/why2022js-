<template>
  <div class="header">
    <h2>{{ message }}</h2>
    <div class="content">
      <slot>
        <!-- 插槽默认值 -->
        <h2>我是插槽</h2>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {

    message: {
      type: String,
      default: "我是header"
    }

  }
}
</script>

<style scoped>
</style>
