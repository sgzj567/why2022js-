// function log(date, type, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}]:[${message}]`);
// };
// log(new Date(), 'debug', '查找到轮播图bug')
// log(new Date(), 'debug', '查找ug')
// log(new Date(), 'debug', '查bug')

// 柯立化优化
var log = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}]:[${message}]`);

var newLog = log(new Date());
newLog('debug')('查找到轮播图bug')
newLog('debug')('查找ug')
newLog('debug')('查bug')