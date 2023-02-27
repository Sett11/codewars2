onlyDuplicates=s=>[...s].filter(e=>s.indexOf(e)!==s.lastIndexOf(e)).join``

console.log(onlyDuplicates('abccdefee'))