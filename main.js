function isValidIP(str) {
  if(JSON.stringify(str).replace(/"/g,'').replace(/[\d\.]/g,'').length!==0)return false
  if(JSON.stringify(str).replace(/"/g,'').replace(/[^\.]/g,' ').match(/\.\./g))return false
  const res=JSON.stringify(str).replace(/"/g,'').split``
  if(+res[0]!==+res[0]||+res.slice().reverse()[0]!==+res.slice().reverse()[0])return false
  console.log(str)
  const check=JSON.stringify(str).split`.`.map(e=>e.replace(/"/g,'')).map(e=>{
    if(e.length>1&&e[0]==='0')e='&'
    return e
  }).filter(e=>e&&e!=='&')
  return check.length===4&&check.every(e=>+e===+e&&+e<256&&+e>=0&&e.replace(/[^\s]/g,'').length===0)
}
console.log(isValidIP('abc.def.ghi.jkl') )