function strCount(o){
  let c=0
  const f=x=>{
    if(typeof x==='string'){
      c++
      return
    }
    if(typeof x==='object')for(let i in x)f(x[i])
  }
  for(let i in o)f(o[i])
  return c
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  }))