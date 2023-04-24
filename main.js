function slogans(p,r,a=[]){
  for(let i=r.length;i>=0;i--){
    if(p.match(r)){
      a.push(r)
      break
    }
    let t=r.slice(0,i)
    if(p.match(t)){
      a.push(t)
      r=r.replace(t,'')
      i=r.length
      t=''
    }
  }
  return a.length
}

console.log(slogans("glorytoukraine","ukraineaineainee"))