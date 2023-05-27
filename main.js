function numericFormatter(s,a='1234567890'){
  for(let i=-1;++i<s.length;)s=s.replace(/[a-z]/i,a[i%a.length])
  return s
}

console.log(numericFormatter("+555 aaaa bbbb", "18031978"))