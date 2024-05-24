function sliding(a,k,r=[]){
  for(let i=k-1;++i<=a.length;)r.push(Math.max(...a.slice(i-k,i)))
  return r
}

console.log(sliding([1,3,-1,-3,5,3,6,7],3))