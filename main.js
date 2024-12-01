const f=(...a)=>a.reduce((a,b)=>a.flatMap(d=>b.map(e=>[...d,e])),[[]])

function wordGenerator(s){
    let a='aeiou',c=0,q=[]
    s=s.toLowerCase().replace(/[aioue]/g,x=>++c&&(x='*'))
    if(!c)return [s]
    let r=f(...a.repeat(c).match(/.{5,5}/g).map(e=>e.split``))
    for(let i of r){
        t=s
        for(let j of i)t=t.replace(/\*/,j)
        q.push(t)
    }
    return q
}

console.log(wordGenerator('b'))