function isAlt(s,l='aieou') {
  for(let i=0;i<s.length-1;i++){
    if(l.includes(s[i])&&l.includes(s[i+1])||!l.includes(s[i])&&!l.includes(s[i+1]))return false
  }
  return true
}
console.log(isAlt('apple'))