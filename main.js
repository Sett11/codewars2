function remove(s){
  return s.split` `.map(e=>[e.replace(/!/g,''),e.match(/!+/g)]).map(e=>{
    if(!e[1]||e[1].length===1)e[1]=''
    if(e[1].length>1)e[1]=e[1].sort((a,b)=>a.length-b.length)[0]
    e=[e[1],e[0],e[1]]
    return e.join``
  }).join` `
}
console.log(remove("!!!!!!!!!asfwx!!!!!!! !!!!!!!ujyefx!!!! dweenq!!! aqjg !!!!!!!zuwfmyd!!! !!!bjug !!!!!!!!!!rcuura!!!! !!!!!!!afjqilr!!!!!!"))
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!"))