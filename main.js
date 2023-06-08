const f=(x,y,r={})=>{
  for(let i=-1;++i<y.length;)r[y[i]]=x.filter(e=>e.slice(0,e.indexOf('.'))===y[i]).map(e=>e.slice(e.indexOf('.')+1))
  for(let i in r){
    if(r[i].some(e=>e.includes('.')))r[i]=f(r[i],v(r[i]))
  }
  return r
}
const v=x=>[...new Set(x.map(e=>e.slice(0,e.indexOf('.'))))]
const z=x=>{
  for(let i in x){
    for(let j in x[i]){
      if(j.match('=')){
        let t=x[i][j][0].replace(/=/,' ').split` `
        x[i][t[0]]=decodeURIComponent(t[1])
        delete x[i][j]
        break
      }
        if(Array.isArray(x[i][j])){
          let o={}
          x[i][j].forEach(e=>{
          e=e.split`=`
          o[e[0]]=decodeURIComponent(e[1])
      })
      x[i][j]=o
      }
    }
  }
  return x
}
function convertQueryToMap(q){
  if(!q)return {}
  if((q.match(/&/g)||'').length<2){
    let o={}
    q.split`&`.map(e=>e.split`=`).map(u=>o[u[0]]=decodeURIComponent(u[1]))
    return o
  }
  let a=q.split`&`,w=v(a),newA=f(a,w)
  return z(newA)
}

console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'))
console.log(convertQueryToMap('jdlps.pkdww.vcnjp=wwijk&jdlps.pkdww.ncrpp=wqbdl&jdlps.qprww.itrwg=qbnwd&jdlps.qprww.krfxd=cgsis&tgrnc.lcnrb.lgmgh=mckrj&tgrnc.lcnrb.jnrjw=tnkhh&tgrnc.dvnph.ilipj=nfrwt&tgrnc.dvnph.lpsdq=mllri'))
console.log(convertQueryToMap('a=1%202'))
console.log(convertQueryToMap('a=1&b=2'))
console.log(convertQueryToMap(''))