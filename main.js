function lemmingBattle(n,g,b){
    const f=x=>x.sort((a,b)=>b-a),r=x=>x.filter(e=>e>0),q=x=>x.join` `;f(g),f(b)
    while(g.length&&b.length){
        for(let i=0;i<n;i++){
            if(g[i]&&b[i]){
                let t=b[i]
                b[i]-=g[i]
                g[i]-=t
            }
        }
        g=r(f(g)),b=r(f(b))
    }
    const l=g.length,c=b.length
    return !l&&!c?'Green and Blue died':!l?`Blue wins: ${q(f(b))}`:`Green wins: ${q(f(g))}`
}

console.log(lemmingBattle(5, [10], [10]))
console.log(lemmingBattle(2, [20, 10], [10, 10, 15]))
console.log(lemmingBattle(3, [50, 40, 30, 40, 50], [50, 30, 30, 20, 60]))