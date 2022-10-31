// 路由器就是维护映射关系的表  分配IP地址ip地址-->mac地址
// 先是后端路由  一个网站是由多个网页组成的
// 前端路由  spa 单页面富应用 (页面不刷新) 整个映射关系是由前端管理的 url的不同
// URLhash本质就是锚点 本质是改变window.location的href的属性
// 可以通过直接赋值来改变location.href  保证页面不刷新  或者监听hashchange
// 常见的路由 history hash

// 使用路由步骤
// 1.创建映射路由所需要的组件
// 2.通过createRouter创建路由对象  并且传入routes和history  配置路由映射  创建基于hash或者history的模式
// 3.使用app注册路由(use方法)
// 第四不使用<router-link>(页面是上展示切换的路由)和<router-view>(站位路由)
// 提高首屏渲染速率 分包处理 import到入函数  import 可以返回promise
// component: () => import("./")

// 在路由中如何获取对应的值
// template 直接通过$route.params获取值
// 在create通过this.$route.params获取值
// 在setup中 我们要使用vue提供的useRoute 该hook会返回一个Route对象 保存着当前路由相关的值 route.params