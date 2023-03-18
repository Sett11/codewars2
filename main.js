function shoppingCalculation(b,a=[]) {
    b=b.map(e=>e.match(/ has /)?a.push(e):e).filter(e=>typeof e==='string')
    a=a.map(e=>{
        e=[e,[]]
        for(let i=0;i<b.length;i++){
            if(b[i].match(e[0].split` `[0]))e[1].push(b[i])
        }
        e[1]=e[1].map(u=>[u])
        for(let i=0;i<e[1].length;i++){
            for(let j=0;j<b.length;j++){
                if(b[j].match(e[1][i][0].split` `[e[1][i][0].split` `-1])&&b[j]!==e[1][i][0]&&b[j].match(/is/))e[1][i].push(b[j])
            }
        }
        e[1]=e[1].map(e=>e.filter((u,i,v)=>v[0].split` `[v[0].split` `.length-1].match(u.toLowerCase().split` `[0])||i===0)).map(u=>u.map((z,i,v)=>i===0?z.match(/\d+.+/)[0]:z.replace(/\D/g,''))).map(e=>[e,+e[0].replace(/\D/g,'')*+e[1].replace(/\D/g,'')])
        e[1]=e[1].map(u=>u.map(z=>typeof z==='object'?z[0]:z).flat())
        e[1]=[e[1].flat().filter(u=>typeof u==='string').join`, `.replace(/\./g,''),e[1].flat(2).filter(u=>typeof u==='number').reduce((a,c)=>a+c,0)]
        return e
    })
    return a.map(e=>e.map((u,i,v)=>i===0?[u.split` `[0], '$'+(u.slice(u.indexOf('$')+1)-v.flat(5).filter(z=>typeof z==='number')[0])]:u[0]).flat())
  }

  console.log(shoppingCalculation([
    "Apple is $5.",
    "Banana is $7.",
    "Orange is $2.",
    "Lisa has $26.",
    "Arthas has $41.",
    "Lisa buys 2 apples.",
    "Arthas buys 1 banana.",
    "Lisa buys 5 oranges.",
    ]))