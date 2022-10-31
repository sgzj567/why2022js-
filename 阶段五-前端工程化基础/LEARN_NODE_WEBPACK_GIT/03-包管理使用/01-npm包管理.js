// 主版本号 X 当你做了不兼容的API修改后 可能不兼容之前版本
// 次版本号 Y  新功能增加  但是兼容之前版本
// Z 修订版本 没有新功能修订之前bug
// ^ XYZ 表示x是保持不变的  Y和Z永远安装最新版本
// ~XYZ 表示XY保持不变 Z永远安装最新版本
console.log("---");
// 初始化pack.json node init
// npm 下载包 npm install package
// 卸载包 npm uninstall package
// pack.json记录当前项目所需要的依赖 项目名称 版本号 作者 pravite :true 表示是私人的不允许npm 发布
// scripts属性 已键值对存在记录一些脚本命令 配置后 如果是npm管理的话用npm run key执行命令
// 对于常用的命令 start test stop restart 可以省略run
// dependencies
// 指的是无论开发还是生产环境都需要依赖的包
// 通常是vue vuex vue-router react

// 与之对应的是devDependencies
// 一些包在生产环境是不需要的 比如webpack babel等
// 这个时候通过npm install webpack --save-dev将它安装到的devDependencies 简写是 -D

// peerDependencies是对等依赖 就是这个库中还需要依赖别的库
// 局部安装 npm install dayjs 就是当前项目使用 局部安装分为开发和生产依赖
// 全局安装 npm install dayjs -g