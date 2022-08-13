// 打包工具也是js写的  要运行在node环境中
const path = require("path")
const fileName = "C://nac/cjk"

const fileName2 = "C://abc/cba/nba.txt"
// 获取文件后缀名.txt
console.log(path.extname(fileName2));
// 获取文件名 nba.txt
console.log(path.basename(fileName2));
// 获取文件路径 C://abc/cba
console.log(path.dirname(fileName2));

// 2.将两个路径拼接在一起  也可以拼接多个
console.log(path.join(fileName, fileName2));
// 3.拼接绝对路径 从右往左解析  fileName2开始解析  直到找到绝路径 如果没找到  就拼接当前路径  生成路径的尾部斜杠会删除掉  空路径也会删除 重点
console.log(path.resolve(fileName, fileName2));