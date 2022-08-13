<template>
  <div>
    <!-- html -->
    <h2 class="title_vue">{{title}}</h2>
    <p class="content">我是内容哈哈</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:"我是vue的标题"
    }
  }
}
</script>
<style>
.title_vue{
  color:aqua
}
.content{
  color:bisque
}
</style>