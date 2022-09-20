class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }
  setCache(key, value) {
    if (value) {
      // 将对象转换为字符串
      this.storage.setItem(key, JSON.stringify(value))
    } else {
      throw new Error("value有误")
    }
  }
  getCache(key) {
    // json对于存储空值  会出错
    const result = this.storage.getItem(key)
    if (result) {
      return JSON.parse(result)
    } else {
      throw new Error("value有误")
    }
  }
  removeCache(key) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
}
const localStor = new Cache()