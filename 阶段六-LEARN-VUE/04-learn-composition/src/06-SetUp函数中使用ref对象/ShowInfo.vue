<template>
  <h2>ShowInfo</h2>
</template>

<script>

export default {
  setup() {
    function ShowInfoFoo() {
      console.log("ShowInfoFoo function");
    }
    const name = "why"
    return {
      ShowInfoFoo, name
    }
  }
}
</script>

<style scoped>

</style>
