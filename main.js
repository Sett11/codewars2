function reverseOddCount(a,b=a.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}),c=[]){
 a=a.map(e=>b[e]%2!==0?c.push(e)&&'&':e),c=c.reverse(),z=0
 while(z<c.length){
  let tmp=a.indexOf('&')
  a[tmp]=c[z]
  z++
 }
 return a
}
console.log(reverseOddCount(['a', 'a', 'b', 'c', 'c', 'd']))