import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载  /**/里面设置的是导出的时候包的名字
// const Home = () => import(/*webpackChunkName:'home'*/"../views/Home.vue")
// const About = () => import(/*webpackChunkName:'about'*/"../views/About.vue")
// 创建一个路由
const router = createRouter({
  // 指定采用的模式 映射关系
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    // 设置默认路径
    {
      path: "/", redirect: "/home"
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/order",
      component: () => import("../views/Order.vue")
    },
    {
      name: "home",
      path: "/home", component: () => import("../views/Home.vue"),
      meta: {
        name: "John",
        age: 18,
      },
      children: [
        {
          path: "/home",
          redirect: "/home/recommend"
        },
        {
          name: "recommend",
          path: "recommend",
          component: () => import("../views/HomeRecommend.vue")
        },
        {
          name: "ranking",
          path: "ranking",
          component: () => import("../views/HomeRanking.vue")
        },
      ]
    },
    {
      name: "about",
      path: "/about", component: () => import("../views/About.vue")
    },
    {
      // 动态路由 组件不变 内容变
      path: "/user/:id", component: () => import("../views/User.vue")
    },
    {
      // 后面加* 是将错误路径解析为数组以字符串形式存储
      path: "/:pathMatch(.*)*", component: () => import("../views/NotFound.vue")
    }
  ]
})
// 动态添加路由
let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../views/Admin.vue")
  })
  // 添加vip页面 组件内嵌套
  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue")
  })
}
// 获取所有的路由映射
console.log(router.getRoutes());
//

// 2.路由导航守卫 beforeEach传入一个回调函数 不返回或者undefined 默认返回路径 可以返回一个对象 包含path query params等 vue2中返回别的路径是next 不过现在不推荐
// 进入任何路由之前先进行回调函数
// 需求:进入订单页面判断用户是否登录
// 跳转页面时候 如果没有登录取登录页面登录
// 如果登录就直接去订单页面
router.beforeEach((to, from) => {
  // to即将进入到Route对象
  // from即将离开Route对象
  // if (to.path !== "/login") {
  //   return "/login"
  // }
  const token = localStorage.getItem("token")
  if (!token && to.path === "/order")
    return "/login"
})
// 添加路由 添加一个相同的name
export default router