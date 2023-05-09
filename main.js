function countourMode(m,a,b,r=Object.entries((m[0].concat(m.map(e=>e[e.length-1]).slice(1)).concat(m[m.length-1].slice(0,-1)).concat(m.map(e=>e[0]).slice(1,-1))).filter(e=>e>=a&&e<=b).reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1])) {
  return r.every(e=>e[1]===r[0][1])?[]:[r[0][1],r.filter((e,i,v)=>e[1]===v[0][1]).map(e=>+e[0]).sort((a,b)=>a-b)]
}

console.log(countourMode([
  [ 1, 3, -4,  5, -2,  5,   1], 
  [2,  0, -7,  6,  8,  8,  15],
  [4,  4, -2,-10,  7, -1,   7],
  [-1, 3,  1,  0, 11,  4,  21],
  [-7, 6, -4, 10,  5,  7,   6],
  [-5, 4,  3, -5,  7,  8,  17],
  [-11,3,  4, -8,  6, 16,   4]],1,7))

  console.log(countourMode([[ 1,   3, -4,   5,  1,  5,  1], 
    [  2,   0, -7,   6,  8,  8, 15],
    [  4,   4, -2, -10,  7, -1,  7],
    [ -1,   3,  1,   0, 11,  4, 21],
    [ 7,   6, -4,  10,  5,  7,  6],
    [ 5,   4,  3,  -5,   7,  8, 17],
    [-11,   3,  4,  -8,  7, 16,  4]],1,7))

    console.log(countourMode([
      [2,1,1,6], 
      [1,3,2,2],
      [2,1,2,6]],0,5))