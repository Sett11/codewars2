function additionWithoutCarrying(a,b) {
 a=([...a+'']).map(Number),b=([...b+'']).map(Number),arr=[]
 if(a.length>b.length){
  let tmp=a.length-b.length
  while(tmp){b.unshift(0);tmp--}
 }
 if(b.length>a.length){
  let tmp=b.length-a.length
  while(tmp){a.unshift(0);tmp--}
 }
 for(let i=0;i<a.length;i++){arr.push(a[i]+b[i])}
 return +arr.map(e=>{
  e=[...(e+'')]
  return e[e.length-1]
 }).join``
}
console.log(additionWithoutCarrying(999,999))