baseFinder=a=>[...new Set(a.join``)].length

console.log(baseFinder([
  '301', '302', '303',
  '304', '305', '310',
  '311', '312', '313',
  '314'
]))