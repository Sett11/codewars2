function a(n){
  if(n<4)return ''
  if(n%2!==0)n-=1
  const r=Array(n).fill('A').map((e,i)=>i!==0?e+' '.repeat(i*2-1)+e:e).map((e,i)=>' '.repeat(n-i-1)+e+' '.repeat(n-i-1))
  for(let i=n/2-1;i<(r[n/2].length)-n/2-1;i++){
    r[n/2]=[...r[n/2]]
    r[n/2][i]='A'
  }
  r[n/2].length=n,r[n/2]=r[n/2].join` `
  let l=n/2-1
  while(l){r[n/2]=r[n/2].replace(/ /,''),l--}
  r[n/2]+=' '.repeat(n/2-1)
  return r.join`\n`
}

console.log(a(7))