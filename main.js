function inter(s1,s2){
  [a,b]=[[...s1],[...s2]]
  return new Set(a.filter(e=>b.includes(e)).concat(b.filter(e=>a.includes(e))))
}

console.log(inter(new Set([1,2]),new Set([1,2,3])))