const axios = require("axios")
axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  console.log(res);
})
// 先全局安装 npm i pnpm -g  pnpm add package是添加包
// pnpm 另一个最重要的命令 store命令是修剪:从store中删除当前从未引用的包来释放store空间
// pnpm store prune
// 获取当前store目录
// pnpm  store path
// pnpm 解决以前如果一个项目用同一个依赖就会在多个项目中安装 会占用太多内存 节省内存 比其他快两倍
// pnpm创建的是非平铺的node_modules 用pnpm的公司vue microsoft等


// 同一依赖的文件只有一份    所有文件在硬盘统一的位置
// pnpm是非扁平化  之前yarn npm 安装依赖包的时候 所有软件包都将被提升到node_modules目录下  其结果是 源码可以访问本不属于当前项目的所设定的依赖包 解决办法使用软链接
// pnpm 运行命令 直接pnpm scripts脚本