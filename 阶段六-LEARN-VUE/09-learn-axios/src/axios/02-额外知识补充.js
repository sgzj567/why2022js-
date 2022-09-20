import axios from "axios";
// 1.baseURL
const baseURL = "http://123.207.32.32:8000"

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 10000
axios.defaults.headers = {}

// 1.1 get:/home/multidata
axios.get("/home/multidata").then(res => {
  console.log("res", res.data);
})
// 1.2数组形请求
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123.207.32.32:9001/lyric?id=500665346")
]).then(res => {
  console.log("res", res.data);
})
