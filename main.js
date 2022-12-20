function newAvg(arr, newavg, count = 10) {
  let sum = newavg * (arr.length + 1) - arr.reduce((acc, curr) => acc + curr, 0);
  if(sum <=0) throw 'ValueError'
 return Math.round(sum)
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
