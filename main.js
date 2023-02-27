function polybius (t) {
  t=[...t],arr=[[ 'A', 'B', 'C', 'D', 'E' ],[ 'F', 'G', 'H', [ 'I', 'J' ], 'K' ],[ 'L', 'M', 'N', 'O', 'P' ],[ 'Q', 'R', 'S', 'T', 'U' ],[ 'V', 'W', 'X', 'Y', 'Z' ]],s=[]
  for(let i=0;i<t.length;i++){
    if(!t[i].match(/[A-Z]/g))s.push(t[i])
      arr.map((e,j)=>e.map((u,z)=>typeof u==='string'&&u===t[i]?s.push([j+1,z+1]):typeof u==='object'&&u[0]===t[i]||u[1]===t[i]?s.push([j+1,z+1]):null))
  }return s.filter(e=>typeof e==='object'||e===' ').map(e=>typeof e==='object'?e.join``:e).join``
 }
 
 console.log(polybius('POLYBIUS SQUARE CIPHER'))
 console.log(polybius('CODEWARS'))