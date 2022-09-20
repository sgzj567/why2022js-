<template>
  <button @click="current = 'app'">app</button>
  <button @click="current = 'home'">home</button>
  <button @click="current = 'about'">about</button>
  <h2>App:{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <keep-alive>
    <component :is="current"></component>
  </keep-alive>
  <button @click="popClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songClick">首页-歌单</button>
  <div class="scroll">
    <h2>X:{{ scrollPosition.x }}</h2>
    <h2>Y:{{ scrollPosition.y }}</h2>
  </div>
</template>
<script>
import useCounter from './utils/useCounter.js'
import about from './views/about.vue';
import home from './views/home.vue';
import useTitle from './utils/useTitle'
import { ref } from 'vue';
import useScrollPosition from './utils/useScrollPosition'

export default {
  components: {
    about, home,
  },
  setup() {
    const current = ref("App")
    // 修改标题
    const title = useTitle("首页")
    function popClick() {
      // useTitle("首页-流行")
      title.value = "首页-流行"
    }
    function hotClick() {
      // useTitle("首页-热门")
      title.value = "首页-热门"

    }
    function songClick() {
      // useTitle("首页-歌单")
      title.value = "首页-歌单"
    }
    // 获取滚动坐标
    const { scrollPosition } = useScrollPosition()
    return {
      ...useCounter(), current, popClick, hotClick, songClick, scrollPosition
    }
  }
}
</script>

<style scoped>
.scroll {
  width: 3000px;
  height: 30px;
  background-color: antiquewhite;
}
</style>
