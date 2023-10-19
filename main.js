const isConsecutive = (
  s,
  r = s.replace(/(.)\1*/g, (e) => e[0] + " ").split` `.slice(0, -1)
) => [...new Set(r)].length == r.length

console.log(isConsecutive("112233"));
console.log(isConsecutive("112233111"));
