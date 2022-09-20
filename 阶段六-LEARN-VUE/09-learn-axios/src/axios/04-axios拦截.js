import axios from "axios";
// 请求时拦截 请求成功的拦截, 请求失败的拦截 config 配置信息

axios.interceptors.request.use((config) => {
  // config.headers["token"] = "coderwhy"
  // 在发送请求之前做什么
  console.log("请求成功的拦截");
  // 1.显示loading动画
  return config
}, (err) => {
  console.log("请求失败拦截");
  return err
})
// 响应式拦截
axios.interceptors.response.use((res) => {
  console.log("响应成功的拦截");
  // 2.结束loading动画
  return res.data
}, (err) => {
  console.log("响应失败的拦截");
  return err
})