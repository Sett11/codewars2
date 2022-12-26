const riders = stations => 
  stations.reduce((acc,curr) => {
    acc.totalDistance += curr
    if(acc.totalDistance > 100){
      acc.totalDistance = curr
      acc.totalRiders++
    }
    return acc
  },
  { totalRiders: 1, totalDistance: 0 }
  ).totalRiders

console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]))