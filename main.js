function maxPossibleScore(o,a) {
  a.forEach(e=>o[e]?o[e]*=2:0)
  return Object.values(o).reduce((a,c)=>a+c,0)
}

console.log(maxPossibleScore({ '1': 36089.11815348692, '27': 895.8762059686159, another: 5 },[ 1, 'another' ]))