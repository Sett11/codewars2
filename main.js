minMinMax=a=>{
  let x=Math.min(...a)+1
  while(a.includes(x)){
    x++
  }return [Math.min(...a),x,Math.max(...a)]
}

console.log(minMinMax([-1, 4, 5, -23, 24]))
console.log(minMinMax([1, 3, -3, -2, 8, -1]))