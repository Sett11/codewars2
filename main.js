function makeAWindow(n,s='|'+'.'.repeat(n)+'|'+'.'.repeat(n)+'|',c='-'.repeat(s.length),z=(s.slice(0,Math.floor(s.length/2))+'+'+s.slice(Math.ceil(s.length/2))).replace(/\./g,'-'),a=[],v=n){
    while(v){
      a.push(s+'\n');v--}a.unshift(c+'\n');a.push(z+'\n')
      return a.concat(a.slice().reverse().slice(1)).map((e,i,v)=>i===v.length-1?e.replace(/[^\-]/,''):e).join``
}

console.log(makeAWindow(10))