function findSecretMessage(p) {
  p=p.replace(/[^a-zA-Z ]/g,'').split` `.map(e=>e.toLowerCase()).filter((e,i,v)=>v.indexOf(e)!==v.lastIndexOf(e)),a=[],r=[]
  for(let i=0;i<p.length;i++){
    if(a.includes(p[i])&&!r.includes(p[i]))r.push(p[i])
    a.push(p[i])
  }
  return r.join` `
}
console.log(findSecretMessage('asdf qwer zxcv. zxcv fdsa rewq. qazw asdf sxed. qwer crfv asdf.'))