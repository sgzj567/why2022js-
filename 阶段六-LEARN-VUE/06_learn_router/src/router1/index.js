import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory,
  routes: [
    {
      path: '/home', component: () => import("../views/home.vue")
    },
    {
      path: '/about', component: () => import("../views")
    },
    { path: '/:pathMatch(.*)*', component: () => import("../views") }
  ]
})
export default router