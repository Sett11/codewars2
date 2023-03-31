function faroCount(n,a=Array(n).fill(1).map((e,i)=>e+i),c=1){
  let f=(x,y=[],l=x.length/2)=>{for(let i=0;i<l;i++){y.push(x[i],x[i+l])}return y},r=f(a)
  while(1){
    if(a.join``===r.join``)break
    r=f(r),c++
  }
  return c
}

console.log(faroCount(30))