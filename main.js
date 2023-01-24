function removeNb (n) {
 const sum = n*(n+1)/2
 const arr = []
 for(let i = Math.round(n/2); i * i <= sum; i++){
  const check = (sum-i)/(i+1)
  if(Number.isInteger(check)){
      arr.push([i,check], [check,i])
  }
 }
 return arr.sort((a,b)=>a[0]-b[0])
}
console.log(removeNb(1000003))