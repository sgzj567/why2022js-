import { ref } from "vue";
export default function useWays() {
  let counter = ref(0);
  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }
  return {
    counter, increment, decrement
  }
}