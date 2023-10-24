function areEqual(s1, s2){
  return [...s1].every(e=>s2.has(e))&&[...s2].every(e=>s1.has(e))
}

function notEqual(s1, s2){
  return !areEqual(s1,s2)
}


console.log(areEqual(new Set(['1','2']),new Set([1,2])))