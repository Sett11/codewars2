function buildPalindrome(s) {
  if(s===[...s].reverse().join``)return s
  for(let i=0;i<s.length;i++){
    if(s+s.slice(0,i).split``.reverse().join``===(s+s.slice(0,i).split``.reverse().join``).split``.reverse().join``)return s+s.slice(0,i).split``.reverse().join``
  }
}
console.log(buildPalindrome('ababab'))