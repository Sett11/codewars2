function runningAverage(){
  const a=[]
  return x=>{
    a.push(x)
    return Math.round(a.reduce((a,c)=>a+c,0)/a.length*100)/100
  }
}

const r=runningAverage()

console.log(r(10))
console.log(r(12))