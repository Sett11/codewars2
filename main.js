function isValidCoordinates(c,s=c.split`, `){
  if(s[0].includes(',')||s[1].includes(',')||s[0].includes('-')&&s[0][0]!=='-'||s[1].includes('-')&&s[1][0]!=='-'||c.replace(/[\d\. \,\-]/g,'').length||Math.abs(+s[0])>90||Math.abs(+s[1])>180||c[c.indexOf('-')+1]===' '||c[c.lastIndexOf(' ')-1]===' '||s[0].replace(/[^\,]/g,'').length>1||s[0].replace(/[^\.]/g,'').length>1||s[1].replace(/[^\,]/g,'').length>1||s[1].replace(/[^\.]/g,'').length>1||s[0].replace(/[^\.\,]/g,'').length>2||s[1].replace(/[^\.\,]/g,'').length>2)return false
  return true
}

console.log(isValidCoordinates("0, 1,2"))