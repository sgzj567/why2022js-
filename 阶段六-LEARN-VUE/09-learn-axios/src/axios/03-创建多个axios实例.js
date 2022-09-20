import axios from 'axios'
// axios 默认提供axios实例提供请求
// axios.get("http://123.207.32.32:9001/lyric?id=500665346")


// 创建其他实例发送请求 优点 可以提供多个实例  在服务器地址不一样的情况下
const instancel = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout: 1000,
  headers: {}
})
instancel.get("/lyric", {
  params: {
    id: 500665346,
  }
}).then(res => {
  console.log("res", res.data)
})