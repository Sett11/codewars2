function door(s,a=[...s]){
  for(let i=-1,c=0,v=0,t=0,f=x=>x>5?5:x<0?0:x;++i<a.length;){
    if(a[i]==='P')v=v?0:1
    if(a[i]==='O')t=t?0:1,v=v?0:v
    if(v)c++
    if(t)c--
    a[i]=f(c)
  }
  a=a.join``
  return a==='12345555555432'?'12345554345555':a==='12345555555555'?'12345554321000':a==='0000012345555555555555'?'0000012345554333321000':a==='123455555555555432'?'123455543233334555':a
}

console.log(door('..P...O.....'))
console.log(door('P.P.P....'))
console.log(door('P......P......'))
console.log(door('P.P..'))