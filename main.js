absentVowel=(s,l='aeiou',c=l.length-1)=>!s.includes(l[c])?c:absentVowel(s,l,c-1)


console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))