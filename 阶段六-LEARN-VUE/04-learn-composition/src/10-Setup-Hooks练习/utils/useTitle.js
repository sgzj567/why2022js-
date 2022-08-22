import { watch, ref } from "vue"

export default
  function changeTitle(titleValue) {
  const title = ref(titleValue)
  // watch第一次不会执行
  watch(title, (newValue) => {
    document.title = newValue
  },
    {
      immediate: true
    })
  return title
}