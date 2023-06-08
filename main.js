String.prototype.hashify=function(){
  let a=[...this],o={}
  for(let i=-1;++i<a.length;){
    let t=a.map((e,j)=>e===a[i]?j:'').filter(e=>e!==''),v=t.map(e=>a[(e+1)%a.length])
    if(!o[a[i]])o[a[i]]=v.length>1?v:v[0]
  }
  return o
}

console.log('12345'.hashify())
console.log('this is a string'.hashify())