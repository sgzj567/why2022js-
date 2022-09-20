const counter = {
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
    doubleCount(state, getters, rootState) {
      return state.count + rootState.rootCounter
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit("incrementC")
    }
  }
}
export default counter