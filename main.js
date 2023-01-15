function duplicateElements(m, n) {
  for(let i = 0; i < m.length+n.length; i++){
   if(m.includes(n[i])||n.includes(m[i])){
    return true
   }
  }
  return false
}
console.log(duplicateElements([0,9, 1, 7], [8, 0, 3]))