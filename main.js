const midpointSum=(n)=>{
  for(let i = 1; i < n.length-1; i++){
    let tmp = n[i]
    let first = n.slice(0,i).reduce((acc,curr)=>acc+curr,0)
    let last = n.slice(i+1).reduce((acc,curr)=>acc+curr,0)
    if(first===last){
      return i
      
    }
  }
  return undefined
}
console.log(midpointSum([0,0,1]))