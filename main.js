function combat(s1,s2){
  const alf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',f=x=>[...x].map(e=>alf.indexOf(e)+1)
  let a=f(s1),b=f(s2)
  while(a.length&&b.length){
    if(a[0]===b[0])a=a.slice(1),b=b.slice(1)
    if(a[0]<b[0])a=a.slice(1),b[0]=Math.round(b[0]-b[0]/3*2)
    if(a[0]>b[0])b=b.slice(1),a[0]=Math.round(a[0]-a[0]/3*2)
  }
  return !a.length&&!b.length?'Draw':a.length?`Winner: s1(${a.map(e=>alf[e-1]).join``})`:`Winner: s2(${b.map(e=>alf[e-1]).join``})`
}

console.log(combat("vyTcJSGRGZcTq","GFyfgBkDxNvgeq"))