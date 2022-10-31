import { onMounted, ref } from 'vue';

export default function useInput() {
  // 自动获取焦点 
  const inputRef = ref()
  onMounted(() => {
    inputRef.value?.focus()
  })
  return { inputRef }
}