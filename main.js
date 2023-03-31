function palindrome(s,c=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()){
  return [...c].join``===[...c].slice().reverse().join``
}

console.log(palindrome("Amore, Roma"))