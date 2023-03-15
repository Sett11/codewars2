function customChristmasTree(c,n,a=[],z=Math.floor(n/3)){
  while(c.length<n**2){c+=c.repeat(1)}
  for(let i=1;i<=n;i++){
    a.push(c.slice(0,i))
    c=c.slice(i)
  }
  while(z){a.push('|');z--}
  return a.map((e,i,v)=>{
    e=e.split``.join` `
    if(e.length<n*2-1)e=' '.repeat((n*2-1-e.length)/2)+e
    return e
  }).join`\n`
}

console.log(customChristmasTree("MUP",14))