function checkeredBoard(n,a='■',b='□',r=[],s=0){
  if(n%2===0){b='■',a='□'}
  let c=Array(n).fill(1).map((e,i)=>i%2===0?a:b).join` `
  while(s<n){
    if(s%2===0){r.push(c);s++}
    r.push(c.split` `.map(e=>e===a?b:a).join` `),s++
  }
  r.length=n
  return r.join`\n`
}

console.log(checkeredBoard(11))