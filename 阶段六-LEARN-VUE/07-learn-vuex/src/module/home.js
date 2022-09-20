export default {

  state: () => ({
    banners: [],
    recommends: []
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
  },
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    actionChangeName(context, playLoad) {
      context.commit("changeName", playLoad)
    },
    async fetchHomeMultidataAction(context) {
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   res.json().then(data => {
      //     console.log(data);
      //   })
      // })
      // 2.promise链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data);
      // })
      // 3.await/async
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      // console.log(data);
      context.commit("changeBanners", data.data.banner.list)
      context.commit("changeRecommends", data.data.recommend.list)
    }
  }
}