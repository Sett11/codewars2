function formatScoreList(a,n=(a.reduce((a,c)=>a+=c.score,0)/a.length).toFixed(1),r=[],m=0){
  a=a.map(e=>Object.entries(e).map(u=>u[1]))
  a.push(['The average score',n])
  a=a.map(e=>{
    r.push(...e.splice(1,1))
    return e[0]
  })
  a.forEach(e=>m=Math.max(e.length,m))
  a=a.map(e=>'|'+e+' '.repeat(m-e.length)+'|')
  a.unshift('|'+' '.repeat(Math.floor((m-4)/2))+'Name'+' '.repeat(Math.ceil((m-4)/2))+'|')
  r=r.map(e=>`${e} pts`),m=0
  r.forEach(e=>m=Math.max(e.length,m))
  r=r.map(e=>{
    while(e.length<m)e=e.replace(/p/,' p')
    return '|'+e+'|'
  })
  r.unshift('|'+' '.repeat(Math.floor((m-5)/2))+'Score'+' '.repeat(Math.ceil((m-5)/2))+'|')
  let s='\n'+'+'+'-'.repeat(a[0].length-2)+'+'+'-'.repeat(r[0].length-2)+'+'+'\n'
  let res=(s+a.map((e,i)=>(e+r[i]).replace(/\|\|/,'|')).join(s)+s)
  res=res.slice(1,res.length-1)
  return res
}

console.log(formatScoreList([
  {name:"Tom",score:1},
  {name:"Jerry",score:2},
  {name:"Mike",score:3},
  {name:"Peter",score:4}
  ]))
console.log(formatScoreList([{"name":"Aunkphiasdaofjrpxghtzwkpsr","score":71},{"name":"Rbunbtingdhgphrojzxrtqd","score":79},{"name":"Pxnvyjdqitr","score":90},{"name":"Wivyygrgocndcmtmv","score":64},{"name":"Wedkfr","score":83},{"name":"Beeszyqaqvbjggdvmkyymairnqggdrwo","score":10},{"name":"Mhbgxdffxcqeiyhlidupdop","score":76},{"name":"Qofonfzzx","score":97},{"name":"Fzgkfphgmgtqsknfjfezenjhenvovswd","score":78},{"name":"Vszvpbj","score":21}]))