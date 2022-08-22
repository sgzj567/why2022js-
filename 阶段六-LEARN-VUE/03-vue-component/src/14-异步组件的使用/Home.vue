<template>
  <div class="home">
    <h2>home{{ name }}-{{ age }}</h2>
    <button @click="add">+1</button>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>


export default {
  name: "home",
  data() {
    return {
      counter: 0,
    }
  },
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
  emits: ["add"],
  methods: {
    add() {
      this.counter++
    }
  },
  mounted() {
    console.log("home");
  },
  // 针对keepalive进入和离开进行的状态
  activated() {
    console.log("activated");
  },
  // 
  deactivated() {
    console.log("deactivated");
  }
}
</script>

<style scoped>
</style>
