function slicesToName(n){
  if(n<2||typeof n!=='number')return null
  if(n===2)return 'sandwich'
  return n%2&1?'bread'+' sandwich'.repeat(Math.floor(n/2)):'sandwich '.repeat(Math.floor(n/2)).trim()
}
function nameToSlices(s){
  if(!s||typeof s!=='string'||s.replace(/bread|sandwich| /g,'').length||s==='bread')return null
  const c=s.split` `
  if([...new Set(c)].length>2||c.includes('bread')&&c.lastIndexOf('bread'))return null
  return c.includes('bread')?Math.floor((c.length-1)*2)+1:c.length*2
}

console.log(slicesToName(11))
console.log(nameToSlices('sandwich sandwich sandwich sandwich'))