function whoWon(p,y,x,a=[]) {
    return Object.entries(p).map(e=>{
        e=[e[0],e[1].split`, `.map(u=>!u.match(/\d+/g)?10:+u).reduce((a,c)=>a+c,0)]
        if(x.includes(e[0]))e[1]+=typeof y==='string'?10:y
        if(e[1]>21){
            a.push(e)
            e='&'
        }
        return e
    }).filter(e=>e!=='&').sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).concat(a)
  }

  console.log(whoWon({"Ben":"9, 7", "Amy":"9, J", "Sam":"K, Q",},'K', ["Amy"]))