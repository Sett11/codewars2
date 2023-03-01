function weakNumbers(n) {
  let m=0, a=Array(n).fill(1).map((e,i,x)=>e=[i+1,Array(i+1).fill(1).map((u,z)=>z+1).filter(v=>(i+1)%v===0).length,0]).map((e,j,v)=>{
    for(let i=j;i>0;i--){
      if(e[1]<v[i][1])e[2]++
      m=Math.max(m,e[2])}return e
  })
  return [m,a.filter(e=>e[2]==m).length]
}
console.log(weakNumbers(500))