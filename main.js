String.prototype.characterCount = function (c) {
    if(!c)return undefined
    const total = Object.entries([...this].reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{}))
    c=[...c]
    for(let i=0;i<c.length;i++){
        for(let j=0;j<total.length;j++){
            if(c[i]===total[j][0])c[i]=total[j][1]
        }
    }return c.length===1?c.map(e=>typeof e==='string'?0:e)[0]:c.map(e=>typeof e==='string'?0:e)
}
  console.log('lol'.characterCount('l'))