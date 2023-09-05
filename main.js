sortArray=(a,b,o={},c=a.map((e,i)=>o[e[0]]=i))=>b.map(e=>[o[e[0]],e]).sort((a,b)=>a[0]-b[0]).map(e=>e[1])

console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'],['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']))