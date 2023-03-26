function missingValues(a) {
  const one=a.filter(e=>a.indexOf(e)===a.lastIndexOf(e))[0]
  a=a.filter(e=>e!==one)
  return one*one* +Object.entries(a.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).filter(e=>e[1]===2)[0][0]
}

console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200]))