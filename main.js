function sortArray(a,b=[],c=[]) {
  a.forEach((e,i)=>e%2!==0?b.push(e):c.push(e)),b.sort((a,b)=>a-b),c.sort((a,b)=>b-a)
  for(let i=0;i<a.length;i++){
    if(a[i]%2!==0)a[i]=b.shift()
    if(a[i]%2===0)a[i]=c.shift()
  }
  return a
}

console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0]))