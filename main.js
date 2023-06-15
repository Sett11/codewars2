function sum(...a){
  if(a.length===1)return (b)=>a[0]+b
  else return a.reduce((a,c)=>a+c,0)
}

console.log(sum(1)(9))