once=f=>{
  const a=[]
  return function(...x){
    if(!a.includes(f.toString())){
      a.push(f.toString())
      return f(...x)
    }
  }
}

logOnce=once(e=>e)
console.log(logOnce(1))
console.log(logOnce(2))
console.log(logOnce(5))