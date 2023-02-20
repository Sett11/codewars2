function mixwords(s){
  return typeof s!=='string'?undefined:s.length===1?s:s.split` `.map(e=>[e.replace(/[^a-zA-Z0-9]/g,''),e.match(/[\.\,\!]/g)]).map(e=>{
    e=e.filter(u=>u)
    if(e[0].length>3){
      e[0]=[e[0].charAt(0),e[0].slice(1,e[0].length-1),e[0].charAt(e[0].length-1)]
      e[0][1]=e[0][1].split``.map((e,i)=>[e,i])
    }return e
  }).map(e=>{
    if(typeof e[0][1]==='object'){
      for(let i=0;i<e[0][1].length;i++){
        e[0][1][i][1]=Math.floor(Math.random()*e[0][1].length+1)
      }
    }if(e[0].length===3&&typeof e[0]==='object')e[0][1]=e[0][1].sort((a,b)=>a[1]-b[1]||a[0].localeCompare(b[0])).map(e=>e[0]).join``
    return e
  }).map(e=>{
    if(typeof e[0]==='object')e[0]=e[0].join``
    if(typeof e[1]==='object')e[1]=e[1].join``
    return e.join``
  }).join` `
}
console.log(mixwords('I like winter'))
console.log(mixwords('hey there, friends!'))