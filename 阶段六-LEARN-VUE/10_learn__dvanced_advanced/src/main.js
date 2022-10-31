import { createApp } from 'vue'
// import App from './01-自定义指令/App.vue'
// import useDirectives from './01-自定义指令/directives'

// import App from './02-内置组件补充/App.vue'
// import App from './04-render函数/App.vue'
// import App from './05-JSX语法/App.vue'
// import App from './06-过度动画/04-动画组件动画.vue'
import App from './06-过度动画/App.vue'
const app = createApp(App)
// useDirectives(app)
// app.directive("focus", {
//   mounted(el) {
//     el.value?.focus()
//   }
// })

app.mount('#app')
