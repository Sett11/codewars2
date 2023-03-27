function winnerOfTrick(c,p,g=0){
  c=c.map(e=>{
    if(e[0]==='A')e=14+e.slice(1)
    if(e[0]==='K')e=13+e.slice(1)
    if(e[0]==='Q')e=12+e.slice(1)
    if(e[0]==='J')e=11+e.slice(1)
    if(e[0]==='T')e=10+e.slice(1)
    return [+e.match(/\d+/g)[0],e.replace(/\d+/g,'')]
  })
  let t=c[0]
  for(let i=0;i<c.length;i++){
    if(c[i][1]===t[1]&&c[i][0]>t[0]){
      g=i;t=c[i]
    }
  }
  return `${p[g]} wins`
}

console.log(winnerOfTrick([ '2C', 'KC', 'QC', '3C' ],[ 'Algichh', 'Bdobd', 'Chharmolg', 'Dbang', 'Erming' ]))