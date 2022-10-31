<script lang="jsx" >
import about from './About.vue'
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
    return (
      <div>
        <h2>count:{this.count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.sub}>-1</button>
        <about></about>
      </div>
    )
  }
}

</script>




<style scoped>

</style>
