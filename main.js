function josephusSurvivor(n,k,a=[],c=0){
  n=Array(n).fill(1).map((e,i)=>i+1)
 while(n.length>0){
  c=(c+k-1)%n.length,a=a.concat(n.splice(c,1))
 }
 return a[a.length-1]
}

console.log(josephusSurvivor(7,3))