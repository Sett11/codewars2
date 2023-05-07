const f=(x,y,a=[],b=[])=>{
  x=[...x]
  for(let i=0;i<x.length;i+=y)a.push(x.slice(i,i+y))
  for(let i=0;i<a[0].length;i++){
    let t=[]
    for(let j=0;j<a.length;j++)t.push(a[j][i])
    b.push(t),t=[]
  }
  return b.map(e=>e.join``).join``
}
function caesarBoxCipherEncoding(c,a=[...c],r=0){
  for(let i=2;i<a.length/2+1;i++){
    let t=f(f(a,i),i)
    if(t===c&&a.length%i===0)r++
  }
  return r
}

console.log(caesarBoxCipherEncoding("abbdbddb"))
console.log(caesarBoxCipherEncoding("abaaba"))