function fromNb2Str(n, sys) {
    for (let j = 0; j < sys.length; j++) {
      let e=sys[j]
      for(let i = j+1; i < sys.length; i++){
          if((e % 2 === 0 && sys[i] % 2 === 0)||(e % 3 === 0 && sys[i] % 3 === 0) ||(e % 4 === 0 && sys[i] % 4 === 0) ||(e % 5 === 0 && sys[i] % 5 === 0) ||(e % 6 === 0 && sys[i] % 6 === 0) ||(e % 7 === 0 && sys[i] % 7 === 0) ||(e % 8 === 0 && sys[i] % 8 === 0) ||(e % 9 === 0 && sys[i] % 9 === 0)||sys.reduce((a, c) => a * c)<n) return "Not applicable"
      }
    }
  return sys.map((e) => `-${n % e}-`).join``;
}
console.log(fromNb2Str(15, [8, 6, 5, 3]))
console.log(fromNb2Str(187, [8,7,5,3]))
