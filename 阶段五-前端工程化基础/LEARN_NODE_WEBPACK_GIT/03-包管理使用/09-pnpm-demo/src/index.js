const axios = require("axios")
axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  console.log(res);
})
// pnpm 另一个最重要的命令 store命令是修剪:从store中删除当前从未引用的包来释放store空间
// pnpm store prune
// 获取当前store目录
// pnpm  store path