function dominator(arr) {
  const obj = arr.reduce((acc, curr) => {
   acc[curr] = (acc[curr] || 0) + 1
   return acc
  }, {})
  const res = Object.entries(obj).flat()
  const max = Math.max(...res)
  const ind = res.indexOf(max)
  return Number(res[ind]) > (arr.length / 2) ? Number(res[ind-1]) : -1
}
console.log(dominator([3,4,3,2,3,1,3,3]))