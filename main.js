sortLetters=(a,s=a.flat().join``.replace(/\d/g,'').toUpperCase())=>[s.match(/[AIOUE]/g)||[],s.match(/[^AIOUE]/g)||[]]

console.log(sortLetters([[1,"a","H"],[3,"o","s"],[4,"E","i"]]))