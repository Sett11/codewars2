function encryptNum(s,c=6) {
  if(s.slice(0,3)!=='+39'&&s.slice(0,4)!=='0039'&&s[0]!=='1'||s.slice(0,2)==='11'||s.slice(0,3)==='111')return false
  s=[...s].reverse().join``
  while(c){
    s=s.replace(/\d/,'X');c--
  }
  return [...s].reverse().join``
 }
 console.log(encryptNum("1-212-420-0202")) 