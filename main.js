String.prototype.ipv4Address=function(){
  if(JSON.stringify(this).replace(/"/g,'').replace(/[\d\.]/g,'').length!==0)return false
  if(JSON.stringify(this).replace(/"/g,'').replace(/[^\.]/g,' ').match(/\.\./g))return false
  const res=JSON.stringify(this).replace(/"/g,'').split``
  if(+res[0]!==+res[0]||+res.slice().reverse()[0]!==+res.slice().reverse()[0])return false
  console.log(this)
  const check=JSON.stringify(this).split`.`.map(e=>e.replace(/"/g,'')).map(e=>{
    if(e.length>1&&e[0]==='0')e='&'
    return e
  }).filter(e=>e&&e!=='&')
  return check.length===4&&check.every(e=>+e===+e&&+e<256&&+e>=0&&e.replace(/[^\s]/g,'').length===0)
}
console.log("127.0.0.1".ipv4Address())
console.log(" 127.0.0.1 ".ipv4Address())
console.log('10.20.030.40'.ipv4Address())
console.log('..255.255'.ipv4Address())
console.log("\n127.0.0.1".ipv4Address())
console.log("127.0.0.1.".ipv4Address())