; (function (g) {
  g = typeof globalThis !== 'undefined' ? globalThis : g || self
  function Dayjs() {
    let date = new Date()
    this.$Y = date.getFullYear()
    this.$M = date.getMonth()
    this.$D = date.getDate()
  }

  function dayjs() {
    return new Dayjs()
  }
  Dayjs.prototype.format = function () {
    return `${this.$D}-${this.$M}-${this.$Y}`
  }
  g.dayjs = dayjs
})(this)