function averageString(s) {
  const check=['zero','one','two','three','four','five','six','seven','eight','nine'],newS=s.split` `.map(e=>check.indexOf(e))
  return newS.includes(-1)?'n/a':check[Math.floor(newS.reduce((a,c)=>a+c,0)/newS.length)]||'n/a'
}

console.log(averageString(""))
