<template>
  <div class="about" @click="btnClick">
    <h2>about</h2>
  </div>
</template>

<script>

export default {
  name: "about",
  methods: {
    btnClick() {
      console.log("---");
    }
  }
}
</script>

<style scoped>
</style>
