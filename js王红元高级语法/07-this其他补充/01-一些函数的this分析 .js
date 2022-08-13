// 2.监听事件
const boxDiv = document.querySelector('.box');
boxDiv.onclick = function() {
        console.log(this); //.box
    }
    // 3.数组foreach/map/filter/find
var names = ["abc", "cba", "nba"]
names.forEach(function(item) {
    console.log(item, this); //此时这里的this是window
})
names.forEach(function(item) {
        console.log(item, this);
    }, "abc") //指定了this绑定对象
names.map(function(item) {
    console.log(item, this); //Argument参数的意思
}, "cba")