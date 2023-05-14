buyTofu=(c,b)=>{
  b=b.split` `
  let x=b.filter(e=>e==='mon').length,y=b.filter(e=>e==='monme').length,z=y*60+x,r=[x,y,z],w=~~(c/60)
  if(w>y)w=y
  c-=w*60
  if(z<c||x<c)return 'leaving the market'
  r.push(c+w)
  return r
}

console.log(buyTofu(124,'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon'))
console.log(buyTofu(124,'mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon'))