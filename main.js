const f=x=>{
  x=[...x]
  let r=[],rr=[]
  for(let i=0;i<x.length;i+=3)r.push(x.slice(i,i+3))
  for(let i=0;i<r.length;i+=3)rr.push(r.slice(i,i+3))
  return rr
}

const r=x=>{
  let a=[],c=0
    for(let i=0;i<x[c].length;i++){
      let iAr=[]
      for(let j=0;j<x.length;j++)iAr.push(x[j][i])
      a.push(iAr),iAr=[]
    }
  return a
}

const o=(x,y,a=[],c=y)=>{
  for(let i=0;i<x.length;i++){
    while(c*3!=x[i].length)c-=1
    let t=[]
    for(let j=0;j<x[i].length;j+=c)t.push(x[i].slice(j,j+c))
    a.push(t),t=[],c=y
  }
  return a
}

function trifidEncode(k,p,d,a=[]){
  let q=f(k)
  d=[...d].map(e=>{
    q.forEach((u,i)=>u.forEach((z,j)=>z.forEach((x,y)=>x===e?e=[i,j,y]:0)))
    return e
  })
  for(let i=0;i<d.length;i+=p)a.push(d.slice(i,i+p))
  return a.map(e=>r(e).map(u=>u.join``).join``.match(/.{3,3}/g).map(z=>[...z].map(Number))).map(e=>e.map(u=>q[u[0]][u[1]][u[2]]).join``).join``
}

function trifidDecode(k,p,d,a=[],w=[]){
  let q=f(k)
  d=[...d].map(e=>{
    q.forEach((u,i)=>u.forEach((z,j)=>z.forEach((x,y)=>x===e?e=[i,j,y]:0)))
    return e
  })
  for(let i=0;i<d.length;i+=p)a.push(d.slice(i,i+p))
  a=a.map(e=>[...e.map(u=>u.join``).join``].map(Number))
  for(let i=0;i<a.length;i++){
    let t=[]
    for(let j=0;j<a[i].length;j+=p)t.push(a[i].slice(j,j+p))
    w.push(t),t=[]
  }
  w=w.map(e=>e.map(u=>u.join``).join``.match(/.{3,3}/g).join``.split``.map(Number))
  return o(w,p).map(e=>r(e)).map(e=>e.map(u=>q[u[0]][u[1]][u[2]]).join``).join``
}

console.log(trifidEncode("EPSDUCVWYM+ZLKXNBTFGORIJHAQ",5,"DEFENDTHEEASTWALLOFTHECASTLE"))
console.log(trifidDecode('EPSDUCVWYM+ZLKXNBTFGORIJHAQ', 7, 'RSQLPNPQBLB'))