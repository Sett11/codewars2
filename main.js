function remember(s){
  let a=[],c=[],r=[...s]
  for(let i=0;i<r.length;i++){
    if(a.includes(r[i])&&c.includes(r[i]))continue
    if(a.includes(r[i]))c.push(r[i])
    else a.push(r[i])
  }
  return c
}

console.log(remember("limbojackassin the garden"))