function mysteriousPattern(m,n,a=[1,1],r=[]){
  while(a.length<m){a.push((a[a.length-1]+a[a.length-2]))}
  if(m===1)a=[1]
  a=a.map(e=>' '.repeat(e%n)+'o'+' '.repeat(m-(e%n)<0?0:m-(e%n)))
  for(let i=0;i<a.slice().sort((a,b)=>b.length-a.length)[0].length;i++){
    let innerArr=[]
    for(let j=0;j<a.length;j++){
      innerArr.push(a[j][i])
    }
    r.push(innerArr.map(e=>e===undefined?' ':e).join``);innerArr=[]
  }
  for(let i=0;i<r.length;i++){
    if(r[i].includes('o'))break
    else r[i]='&'
  }
  for(let i=r.length-1;i>0;i--){
    if(r[i].includes('o'))break
    else r[i]='&'
  }
  r=r.filter(e=>e!=='&').map(e=>e.includes('o')?e.slice(0,e.lastIndexOf('o')+1)+'\n':'\n').join``
  return r.slice(0,r.length-1)
}

console.log(mysteriousPattern(9,19))