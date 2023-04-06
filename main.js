function reduceCards(a){
  const o=['A','1','2','3','4','5','6','7','8','9','T','J','Q','K'],f=x=>x.sort((a,b)=>a-b)
  return !Array.isArray(a)?null:!a.length?[]:typeof a[0]==='string'?f(a.map(e=>o.indexOf(e[0]))).map(e=>o[e]):f(a.map(e=>e%13))
}

console.log(reduceCards([51, 7, 24, 22, 50, 0]))