getCountedNucleotides=g=>[...g.toUpperCase()].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{A:0,C:0,G:0,T:0})

console.log(getCountedNucleotides('aCCggT'))