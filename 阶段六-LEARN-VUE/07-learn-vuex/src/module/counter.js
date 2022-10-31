const counter = {
  // 不写nameSpace的话默认注册全局(action mutation getters)
  namespaced: true,
  state: () => ({
    count: 99,
  }),
  mutations: {
    incrementC(state) {
      state.count++
    }
  },
  getters: {
    // rootState是根模块
    doubleCount(state, getters, rootState) {
      return state.count + rootState.rootCounter
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit("incrementC")
    },

  }
}
export default counter