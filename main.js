function isValidSet(q,s,c,p) {
  return [...new Set(q)].length!==2&&[...new Set(s)].length!==2&&[...new Set(c)].length!==2&&[...new Set(p)].length!==2
}
console.log(isValidSet([1,2,1], ["diamond","diamond","snake"], ["blue","red","red"], ["blank","blank","striped"]))