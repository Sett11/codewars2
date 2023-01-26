function gridMap(fn,a) {
  return a.map(el=>el.map(fn))
}
console.log(gridMap(x => x+1, [ [1,2,3,4]
  , [5,6,7,8,9]
  , [0,2,4]
  ]))