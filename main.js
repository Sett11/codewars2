function scoreHand(a) {
  a=a.map(e=>e.match(/\d/)?+e:e==='A'?11:10).sort((a,b)=>a-b),f=x=>x.reduce((a,c)=>a+c,0)
  while(1){
    if(f(a)<22||a.every(e=>e!==11))break
    a[a.indexOf(11)]=a[a.indexOf(11)]-10
  }
  return f(a)
}


console.log(scoreHand(["7", "7", "8"]))