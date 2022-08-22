import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载  /**/里面设置的是导出的时候包的名字
// const Home = () => import(/*webpackChunkName:'home'*/"../views/Home.vue")
// const About = () => import(/*webpackChunkName:'about'*/"../views/About.vue")
// 创建一个路由
const router = createRouter({
  // 指定采用的模式
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    // 设置默认路径
    {
      path: "/", redirect: "/home"
    },
    {
      path: "/home", component: () => import("../views/Home.vue")
    },
    {
      path: "/about", component: () => import("../views/About.vue")
    },
    {
      // 动态路由
      path: "/user/:id", component: () => import("../views/User.vue")
    },
    {
      // 后面加* 是将错误路径解析为数组以字符串形式存储
      path: "/:pathMatch(.*)*", component: () => import("../views/NotFound.vue")
    }
  ]
})

// 
export default router