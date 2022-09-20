<template>
  <div class="about">
    <h2>home {{ name }}-{{ age }}</h2>
    <button @click="homeBtn">homeBtn</button>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: "zxk"
    },
    age: {
      type: Number,
      default: 20,
    }
  },
  methods: {
    homeBtn() {
      console.log("homeBtn");
      this.$emit("homeBtn", "zxk")
    }
  }
}
</script>

<style scoped>
</style>
