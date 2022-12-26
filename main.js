function riders(stations) {
  return Math.ceil(stations.reduce((acc,curr) => acc+curr,0)/100)
}
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]))