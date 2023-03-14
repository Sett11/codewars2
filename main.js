ScrambleWords=s=>{
  return s.split` `.map(e=>{
    e=[e,[]]
    for(let i=0;i<e[0].length;i++)if(!e[0][i].match(/[a-zA-Z]/g))e[1].push(i)
    e=[e[0].replace(/\W/g,''),e[0].replace(/\w/g,'').split``,e[1]]
    if(e[0].length>3){
        e[0]=e[0].charAt(0)+e[0].slice(1,e[0].length-1).split``.sort().join``+e[0].charAt(e[0].length-1)
    }
    if(e[2].length){
         for(let i=0;i<e[2].length;i++){
         e[0]=e[0].slice(0,e[2][i])+e[1][i]+e[0].slice(e[2][i])
         }
    }
    return e[0]
  }).join` `
}

console.log(ScrambleWords(`he's dice. lock-in. retribution subsequently you're. you're discombobulate discombobulate come. we'll`))