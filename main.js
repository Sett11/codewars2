function solution(d,r){
  if(typeof d!=='object')return d
  const f=(x,y)=>{
    if(typeof x[y]==='object'){
    for(let i in x[y]){
      if(typeof x[y][i]==='object')f(x[y],i)
      if(i==='dynamic'){
        x=x[y][i]
        delete x[y][i]
        x[y][r]=x
      }
      if(x[y][i]==='dynamic')x[y][i]=r
    }
  }
    if(x[y]==='dynamic'){
      x[y]=r
    }
    else return
  }
  for(let i in d)f(d,i)
  return d
}

console.log(solution({
  foo: "dynamic",
  bar: {
    baz: ["dynamic"]
  },
  dynamic: true
},'static'))