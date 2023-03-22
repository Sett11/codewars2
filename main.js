diff=(a,b)=>[...new Set(a.filter(e=>!b.includes(e)).concat(b.filter(e=>!a.includes(e))))].sort()

console.log(diff(["a","b","z","d","e","d"],["a","b", "j","j"]))