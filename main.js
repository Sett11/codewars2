function WOWdecoder(s,r=s.split` `.filter(e=>e&&e.match(/[7-9A-F]/)&&!e.match(/[0-6J-Z]/))){
  return [...s].some(e=>parseInt(e,36)-10>5)||r.length>3&&r.every(e=>e.length<6)||s.match(/[J-Z]/)?'blocked jam attempt':!r.length?'no signals found':r.join` `
}

console.log(WOWdecoder(" 1  2  1 221 3 ABC99F   23 BBC   "))
console.log(WOWdecoder("AFC 1  633 1 22 899 AAA9  1  2 C 99"))
console.log(WOWdecoder("  445 295 12 23 6654 1  11 1   3"))
console.log(WOWdecoder("   1   1  3   2 2      3   4   2 1     H    3  1 2   "))