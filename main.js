function palindrome(s){
  s=s.replace(/[^A-Za-z]/g,'').toLowerCase(),s1=s.replace(/[aioue]/g,''),s2=s.replace(/[^aioue]/g,''),s1s=[...s1].reverse().join``,s2s=[...s2].reverse().join``
  return s1===s1s&&s2===s2s?'both':s2===s2s?'vowel':s1===s1s?'consonant':'neither'
}

console.log(palindrome(" *73_ ab"))