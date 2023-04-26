function solution(r){
  const o={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
  r=[...r].map(e=>o[e]);c=0;r.push(0)
  for(let i=0;i<r.length-1;i++){
    if(r[i+1]<=r[i])c+=r[i]
    else c-=r[i]
  }
  return c
}

console.log(solution('DXLVII'))
console.log(solution('MDCLXVI'))