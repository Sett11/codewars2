function searchEng(s,c,n,ns){
  if(c.match(/[^a-z0-9]/gi)||(ns||'').match(/[^a-z0-9]/gi)||!s)return 'No valid input'
  s=s.replace(/\W| /g,'&$&&').split`&`
  if(n===1)return {matches:s.filter(e=>e===c).length,newString:''}
  return {matches:s.filter(e=>e===c).length,newString:s.map(e=>e===c?ns:e).join``}
}

console.log(searchEng('OMG, today is Monday!','day', 1))
console.log(searchEng('Today is my day!','day', 2, 'birthday'))