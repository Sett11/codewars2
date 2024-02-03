function sortByArea(a){
  return a.map(e=>+e==+e?+(Math.PI*(e**2)).toFixed(2):+(e[0]*e[1]).toFixed(2)).sort((a,b)=>a-b)
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]))