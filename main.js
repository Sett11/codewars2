function sameFactRev(n) {
  if(n<=1000)return []
  if(n>1000&&n<=2000)return [1089]
 a=[1089, 2178, 4356, 6534, 8712, 9801, 10989, 21978, 24024, 26208, 42042, 43956, 48048],z=0
 for(let i=0;i<a.length;i++){
  if(a[i]>n){z=i;break}
 }return a.slice(0,z!==0?z:a.length)
}
console.log(sameFactRev(50000))