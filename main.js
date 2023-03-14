function getLengthOfMissingArray(b){
  if(!b||!b.length||b.some(e=>!e||!e.length))return 0
  let a=b.map(e=>e.length),c=Math.min(...a),z=Math.max(...a)
  while(c<z){if(!a.includes(c))return c;c++}
}

console.log(getLengthOfMissingArray([ [], [ 1, 2, 2 ] ]))