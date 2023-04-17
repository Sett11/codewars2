function concatenationProcess(a){
  let one=a.map((e,i)=>[e,i]).sort((a,b)=>a[0].length-b[0].length).filter((e,i,v)=>e[0].length===v[0][0].length).shift()
  a=a.map((e,i)=>[e,i]).filter(e=>e[1]!==one[1])
  let two= a.sort((a,b)=>a[0].length-b[0].length).filter((e,i,v)=>e[0].length===v[0][0].length).pop()
  a=a.filter(e=>e[1]!==two[1])
  a.push(one[0]+two[0])
  a=a.map(e=>typeof e!=='string'?e[0]:e)
  return a.length===1?a[0]:concatenationProcess(a)
}

console.log(concatenationProcess(["a","abc","abcc","aaa","z","","qw"]))