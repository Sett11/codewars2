legRoom=(a,b,v=b.match(/00/),s=b.replace(/[aeiou]/gi,'').length*2,n=~~(a/100*55)/100*15)=>v?'Jackpot!':s<=n?'ouch':s>n+6?'super comfy':'comfortable'


console.log(legRoom(108,'ifbjejaigghkg'))
console.log(legRoom(192, 'aelm'))
console.log(legRoom(168, 'alljhfmd'))