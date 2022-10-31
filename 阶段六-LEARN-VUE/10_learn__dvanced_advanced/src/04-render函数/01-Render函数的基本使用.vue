<script>
import { h } from 'vue';

export default {
  render() {
    return h("div", { class: "box", title: "内容" }, "我是div", [
      h("h2", { class: "title" }, "我是标题"),
      h("p", { class: "pEl" }, "我是p标签")
    ])
  }
}

</script>

<!-- <template>
  <div>
    <h2>app</h2>
  </div>


</template> -->
<style scoped>

</style>
