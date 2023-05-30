function arrayToString(a,r=[]){
  for(let i=-1;++i<=a.length;){
    let t=a[i+1]-a[i]
    for(let j=i;++j<=a.length;){
      if(a[j+1]-a[j]!==t||j===a.length){
        r.push([a.slice(i,j+1),t]),i=j
        break
      }
    }
  }
  if(r.every(e=>e[0].length<3))return r.map(e=>e[0]).flat().join`,`
  for(let i=-1;++i<r.length-1;){
    let l=r[i][0].length-1
    if(r[i+1][0].length>1&&r[i+1][0].length<3&&Math.abs(r[i][0][l]-r[i+1][0][0])===Math.abs(r[i+1][0][0]-r[i+1][0][1]))r[i+1][0].unshift(r[i][0].pop())
  }
  return r.map(e=>[e[0][0],e[0].length+[!e[1]?'':e[1]<0?e[1]:'+'+e[1]]].join`:`).join`,`
}
function stringToArray(s,a=s.split`,`){
  return a.map(e=>{
    if(!e.includes(':'))return +e
    e=e.split`:`,e[0]=+e[0],e[1]=e[1].replace(/\D/,' $& ').split` `.map(u=>+u===+u?+u:u),t=[e[0]],x=e[1].shift()
    while(x>1)t.push(eval(t[t.length-1]+e[1].join``)),x--
    return t
  }).flat()
}
console.log(arrayToString([1,2,3,4,6,6,6,6,8,6,4,2]))
console.log(arrayToString([1,2,3,4,3,2,1]))
console.log(arrayToString([1,2,3,4,3,2]))
console.log(arrayToString([11,14,6,1,11,19,11,19,12,0,9,18,20,16,18,14,19] ))
console.log(arrayToString([ 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 1, -6, -13, -20, -27, -34, -41, -48, -55, -62, -69, -76, -83, -90, 11, 18, 25, 32, 39, 46, 53, 60, 67, 74, 81, 88, 95, 3, 4, 5, 6 ]))