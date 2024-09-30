function minSteps(a){
  let n=a.length
  let sum=a.reduce((a,c)=>a+c,0),s=sum/n
  let r=a.map(e=>Math.abs(e-s)/2)
  if(s%1||r.some(e=>e%1))return -1
  return r.reduce((a,c)=>a+c)/2
}

console.log(minSteps([7,15,9,5]))
console.log(minSteps([ 1944, 1952, 1988, 1940, 1956 ]))
console.log(minSteps([526,512,502,498,502,508] ))