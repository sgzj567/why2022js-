import { defineStore } from 'pinia'
const useUser = defineStore("user", {
  state: () => ({
    name: "why",
    age: 19,
    level: 20,
  })
})
export default useUser