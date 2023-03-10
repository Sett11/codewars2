checkVowel=(s,p)=>p>=0&&p<s.length&&s[p].match(/a|e|u|o|i/gi)!==null

console.log(checkVowel('cat', 1))