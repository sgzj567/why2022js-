<template>
  <div class="app">
    <h1 class="title">我是App.vue</h1>
    </div>
    <!-- AppHeader -->
  <app-header></app-header>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.title{
 color:red;
}
</style>
