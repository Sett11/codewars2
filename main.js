function encode(alf,seq){
   let a=[...alf],r=[]
   for(let i=-1;++i<seq.length;){
      let g=a.indexOf(seq[i])
      if(g)a.unshift(a.splice(g,1)[0])
      r.push(g)
   }
   return r[0]!=-1?r:null
}

function decode(alf,seq){
   let a=[...alf],r=seq.slice()
   for(let i=-1;++i<seq.length;){
      r[i]=a[seq[i]]
      if(seq[i])a.unshift(a.splice(seq[i],1)[0])
   }
   return typeof alf==='string'?r.join``||null:r
}

console.log(encode("abc", "acacac"))
console.log(decode("abc", [0,1,1,1,1,1]))