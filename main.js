function solve(s) {
  let arr = s.slice().replace(/[aeiou]/g, ' ')
  arr = arr.split(' ').map(el => el.split('').map(el => el.charCodeAt() - 96).reduce((acc,curr) => acc + curr, 0))
  return Math.max(...arr)
}
console.log(solve("zodiacs"))