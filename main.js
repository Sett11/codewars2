function longestBouncyList(a,r=[]){
  if(new Set(a).size===1)return [a[0]]
  const f=x=>{for(let i=0;i<x.length+1;i++){if(x[i-1]>=x[i]&&x[i+1]<=x[i]||x[i-1]<=x[i]&&x[i+1]>=x[i])return false}return true}
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length+1;j++){
      if(!f(a.slice(i,j))||j===a.length+1&&f(a.slice(i,j))){
        r.push(a.slice(i,j-1))
        break
      }
    }
  }
  return r.sort((a,b)=>b.length-a.length)[0]
}
console.log(longestBouncyList([7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]))
console.log(longestBouncyList([1,2,3,4,5,6]))
// console.log(longestBouncyList([1,1,1,1,1,1]))
// console.log(longestBouncyList([
//   -11,  10,  6,  7,  3, -1,
//    -3,  -3, 15, -4, -5, -1,
//    -7, -16
// ]))
// console.log(longestBouncyList([
//   -10, -6, 7,   7,  -7, -11,
//     3,  3, 6, -12, -14,  14,
//    14,  7
// ]))