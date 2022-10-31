<script>
import { h } from 'vue';

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    },
    sub() {
      this.count--
    }
  },
  render() {
    return h("h2", null, `计数${this.count}`, [
      h("button", { onClick: this.add }, "+1"),
      h("button", { onClick: this.sub }, "-1"),
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
