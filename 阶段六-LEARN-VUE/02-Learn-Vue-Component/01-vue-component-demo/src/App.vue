<template>
  <h2>{{title}}</h2>
  <h2>当前计数:{{counter}}</h2>
  <button @click="add" >+</button>
  <button @click="sub" >-</button>

  <product-item></product-item>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: {
    ProductItem
  },
  data(){
    return {
      title:"我是标题",
      counter:0,
    }
  },
  methods: {
    add() {
      this.counter++
    },
    sub() {
      if (this.counter <= 0) {
        
        return
      }
      this.counter--;
    }
  }
}
</script>

<style>
h2{
color: aqua;
}
</style>