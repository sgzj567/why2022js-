function parseLyric(lyricString) {
  const lyricLineStrings = lyricString.split("\n")
  // 针对每一行歌词进行解析
  // [02:22.333]
  const timeRe = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
  const lyricInfos = []
  // 获取时间
  for (const lineSting of lyricLineStrings) {
    const result = lineSting.match(timeRe)
    if (!result) continue
    const minuteTime = result[1] * 60 * 1000;
    const secondTime = result[2] * 1000;
    const mSecondTime = result[3].length === 3 ? result[3] * 1 : result[3] * 10
    const time = minuteTime + secondTime + mSecondTime;
    // 2.获取内容
    const content = lineSting.replace(timeRe, "").trim()
    // 3.将对象放到数组中
    lyricInfos.push({
      time,
      content
    })
  }

  return lyricInfos
}