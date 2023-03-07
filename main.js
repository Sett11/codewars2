function add(a,b) {
  if(+a<+b){
    let tmp=a
    a=b
    b=tmp
  }
  if(a.length<b.length)a='0'.repeat(b.length-a.length)+a
  if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
  a=[...a].map(Number),b=[...b].map(Number),s=''
  for(let i=a.length-1;i>=0;i--){
    let c=(a[i]+b[i])%10,r=(a[i]+b[i])>9?1:0
    if(r)b[i-1]+=1
    s+=c
    if(i===0&&r)s+=r
  }
  return [...s].reverse().join``
}

console.log(add("888", "222"))
console.log(add("123", "321"))
console.log(add("1372", "69"))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))

//"91002328220491911630239667963"