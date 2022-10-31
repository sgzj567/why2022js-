// npx是在npm5.之后自带的
// 安装东西之前先安装配置文件packJSON(npm init)
// 安装webpack的时候必须同时安装webpack-cli 加上-D开发阶段用的 打包的时候就不打包
// 指定安装版本 npm i webpack@3.6.0 -g
// 以前想要查找当前项目的版本号 需要进入到node_modules bin 中去查找 eg:.\node_modules\.bin\webpack --version
// 现在只需npx webpack --version 不过webpack有bug 现在直接写名字+--version 现在局部找然后再在全局找
// 自动打包 npm run build 发布的就是dist的文件
// npm 执行脚本命令的时候 先在node_modules中找 所以不用写npx  再去全局找