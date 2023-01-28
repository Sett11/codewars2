function remove(s){
  if(s===''||s.length===1||s.length===2||s.length===3&&s[0]!==s[1]||s.length===3&&s[1]!==s[2])return s
  return s.replace(/\!+|\?+/g, ' $& ').split` `.filter(el=>{
      if(el==='')return false
      if(el.length===1)return true
      if(el.length!==1&&el.length%2===0)return true
    }).join``.replace(/\!+|\?+/g, ' $& ').split` `.filter(el=>{
      if(el==='')return false
      if(el.length===1)return true
      if(el.length!==1&&el.length%2===0)return true
    }).join``
}
  console.log(remove("!???!!" ))