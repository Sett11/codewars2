sortPoker=(j,u,a=[])=>{
    let res=j.replace(/.\d+|.J|.Q|.K|.A/g,'$& ').split` `.filter(e=>e).map(e=>[e,u.indexOf(e[0])]).sort((a,b)=>a[1]-b[1]).map(e=>e[0])
    res.push('&')
    for(let i=0;i<res.length-1;i++){
        if(res[i][0]===res[i+1][0]){
            for(let j=i+1;j<res.length;j++){
                if(res[j][0]!==res[i][0]||j===res.length-1&&res[j][0]===res[i][0]){
                    a.push(res.slice(i,j===res.length-1?j+1:j))
                    i=j-1
                    break
                }
            }
        }else{
            a.push([res[i]])
        }
    }
    return a.map(e=>e.filter(u=>u!=='&').map(u=>u[1].match(/\d+/)?[u,+u.replace(/\D/g,'')]:[u,u[1]==='T'?10:u[1]==='J'?11:u[1]==='Q'?12:u[1]==='K'?13:14]).sort((a,b)=>a[1]-b[1]).map(u=>u[0]).join``).join``
}

console.log(sortPoker(
"♥2♠3♣J♥6♠K♠8♠4♦3♥10♣6♣10♥8♣4",
"♣2♣5♣A♠5♠8♠10♠A♥2♥9♦4♦Q♦K♦K"))
console.log(sortPoker(
    "♦6♥2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A",     
    "♠2♠3♠5♥J♥Q♥K♣8♣9♣10♦4♦5♦6♦7"))