// 定义一个counter的store
// 也可以是use的store
import { defineStore } from 'pinia'
import useUser from './use'
// 返回的是函数 必须定义一个用户名 区分store
const count = defineStore("counter", {
  state: () => ({
    name: "kobe",
    count: 99,
    friends: [
      { name: "why", age: 19, id: 111 },
      { name: "John", age: 22, id: 112 },
      { name: "ldh", age: 25, id: 113 },
    ]
  }),
  // getters相当于options中的computed
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    // 一个getter引入另一个getter
    doubleCountAddOne() {
      // this是store实例
      return this.doubleCount + 1
    },
    // 3.getters支持返回一个函数
    getFriendById(state) {
      return function (id) {
        return state.friends.find(item => item.id === id)
      }
    },
    // 4.使用其他store信息
    showMessage(state) {
      //  1使用user信息  从实例中获取方法
      const userStore = useUser()
      return `name:${state.name}+${userStore.name}`
    }
  },
  // action 不会传进来state
  actions: {
    increment() {
      this.count++
    },
  }
})
// 如果要用store 需要调用返回函数的方法
// const store = count()
export default count