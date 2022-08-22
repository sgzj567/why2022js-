import { onMounted, ref } from "vue"

export default function useCounter() {
  const counter = ref(999)
  onMounted(() => {
    setTimeout(() => {
      counter.value = 999
    }, 1000)
  })
  function increment() {
    counter.value++
  }
  function decrement() {
    counter.value--
  }
  return {
    increment, decrement, counter
  }
}