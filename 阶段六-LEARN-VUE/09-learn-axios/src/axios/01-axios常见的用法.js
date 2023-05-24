import axios from 'axios'
// axios.request({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get",

// }).then(res => {
//   console.log("res:", res.data);
// })

// 2.发送get请求 参数是拼接到url后面的
// axios.get("http://123.207.32.32:9001/lyric", {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//   console.log("res:", res.data.lrc);
// })

// 3.发送post请求 参数没有拼接到url后面
axios.post("http://123.207.32.32:1888/02_param/postjson", {
  // data: {
  //   name: "coder",
  //   password: 123456,
  // },
  // 与上面相等
  name: "coder",
  password: 123456,
}).then(res => {
  console.log("res:", res.data);
})




