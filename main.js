function longestWord(s){
    console.log(s)
      let a=words.filter(e=>[...e].every(u=>s.includes(u))).sort((a,b)=>b.length-a.length)
      let c=Object.entries([...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))
      a=a.map(e=>{
        let t=c.filter(u=>e.match(u[0])).sort((a,b)=>a[0].localeCompare(b[0]))
        let r=Object.entries([...e].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a[0].localeCompare(b[0]))
        for(let i=0;i<r.length;i++){
          if(r[i]>t[i])return 0
        }
        return e
      }).filter(e=>e)
    a=a.filter(e=>e.length===a[0].length)
    return a.length?a.sort():null
  }

console.log(longestWord('ALI'))