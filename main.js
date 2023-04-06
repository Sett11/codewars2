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

function sum(...a){
  let b=[...a].map(e=>typeof e!=='string'?e+'':e).map(e=>{
    while(e[0]==='0')e=e.slice(1)
    return e
  })
  if(!b.length)return '0'
  if(b.length%2!==0)b.push('0')
  for(let i=0;i<b.length;i++){
    let t=b.splice(i,2)
    b.unshift(add(...t))
  }
  return b.length>1?sum(...b):b[0]
}

console.log(sum('12', '000003'))