// vuex状态(state)管理
// state getters action mutation module
// 要想修改state的数据 必须dispatch actions 然后commit 到mutations -->修改成功
// 使用 
// import { createStore } from "vuex";
const store = createStore({
  state: () => ({})
})
// template中获取store $store.state.

// mutation只能使用同步操作 异步操作只能放在action中 发送网络请求放到action
// Vuex使用单一状态树(一个对象就包含了全部应用层级状态)  但是可以分模块module  但是pinia是扁平化的
// getters类似组件的computed

// action类似于mutation不同在于
// action提交的是mutation 而不是直接变更状态
// action可以包含任何异步操作


// context 是一个和store实例有相同方法和属性的context
// 所以我们可以从中获取commit方法来提交一个mutation 或者通过context.state和context.getters来获取state和getters
// 但是为什么不是store对象呢