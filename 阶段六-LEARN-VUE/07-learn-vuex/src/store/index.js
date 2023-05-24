import { createStore } from "vuex";
import homeModule from "@/module/home";
import counterModule from "@/module/counter"
const store = createStore({
  state: () => ({
    counter: 100,
    rootCounter: 99,
    name: "why",
    level: 100,
    avatarURL: "http://xxx",
    friends: [
      { id: 111, name: "why", age: 21 },
      { id: 112, name: "zxk", age: 23 },
      { id: 113, name: "kobe", age: 25 },
    ],
    // 服务器数据
    banners: [],
    recommend: []
  }),
  getters: {

    total(state) {
      return state.friends.reduce((pre, item) => {
        return pre + item.age
      }, 0)
    },
    // 在getter属性中使用其他getter
    message(state, getters) {
      return `name:${state.name} level:${state.level} ageTotal:${getters.total}`
    },
    // 在getters属性中是可以返回一个函数的
    getFriendById(state) {
      return (id) => state.friends.find(item => item.id === id)
    },
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    changeName(state, playLoad) {
      state.name = playLoad
    },
    changeInfo(state, newInfo) {
      state.name = newInfo.name
      state.level = newInfo.level
    },
    // 不要在mutations进行异步操作
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommend(state, recommend) {
      state.recommend = recommend
    }
  },
  // actions不能直接修改state的状态,需要提交mutations,actions可以包含异步操作
  actions: {
    incrementAction(context) {
      // console.log(context.commit);//用于提交mutations
      // console.log(context.getters);
      // console.log(context.store);
      context.commit("increment")
    },
    actionChangeName(context, playLoad) {
      context.commit("changeName", playLoad)
      console.log(playLoad);
    },
    async fetchHomeMultidataAction(context) {
      //   fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //     res.json().then(data => {
      //       console.log(data);
      //     })
      //   })
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      console.log(data);
      context.commit("changeBanners", data.data.banner.list)
      context.commit("changeRecommend", data.data.recommend.list)
    }
  },
  // 引入module
  modules: {
    home: homeModule,
    counterM: counterModule
  }
})
export default store