import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

import HYRequest from './service'
createApp(App).mount('#app')



HYRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res", res);
}).catch(err => {
  console.log("err", err);
})

