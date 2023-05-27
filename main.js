function tickToward(s,e,f=(x,y)=>x<y?x+=1:x>y?x-=1:x,a=[s]){
  while(a[a.length-1].join``!==e.join``){
    let t=a[a.length-1]
    a.push([f(t[0],e[0]),f(t[1],e[1])])
  }
  return a
}

console.log(tickToward([5,1],[5,-2]))