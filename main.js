const lostSheep = (friday,saturday,total) => total - friday.concat(saturday).reduce((acc, curr) => acc + curr, 0)

console.log(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255))