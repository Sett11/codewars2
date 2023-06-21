nextBigger=n=>{
  let a=[...n+''],t=-1
  for(let i=a.length;--i>0;){
    if(+a[i]>+a[i-1]){
      t=i-1
      break
    }
  }
  if(t===-1)return t
  let b=a.splice(t),c=b.splice(0,1)[0],d=null,e=null
  for(let i=-1;++i<b.length;)if(b[i]>c)if(d===null||b[i]<d)d=b[i],e=i
  if(e===null)return -1
  b.splice(e,1),b.push(c),b.sort()
  let r=+a.concat([d]).concat(b).join``
  return r>n?r:-1
}

console.log(nextBigger(2017))
console.log(nextBigger(23584014227))
console.log(nextBigger(414))