function HyAjax({ url, method = "get", timeout = 10000, success, failure, data, headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    // 1.创建对象
    const xhr = new XMLHttpRequest()
    // 2.监听数据
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response)
      } else {
        reject({
          status: xhr.status,
          message: xhr.statusText
        })
      }
    }
    // 3.设置类型
    xhr.responseType = "json"
    // 4.open 方法
    if (method.toUpperCase() === "GET") {
      const queryStings = []
      for (const key in data) {
        queryStings.push(`${key}=${data[key]}`)
      }
      url = url + "?" + queryStings.join("&")
      xhr.open(method, url)
      xhr.send()
    } else {
      xhr.open(method, url)
      // 5.发送请求
      xhr.setRequestHeader("Content-type", "application/json")
      xhr.send(JSON.stringify(data))
    }
  })


}