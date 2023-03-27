function merryChristmas(s,r=[]){
  const c=[[ 'C', 1 ], [ 'M', 1 ],[ 'a', 1 ],[ 'e', 1 ],[ 'h', 1 ],[ 'i', 1 ],[ 'm', 1 ],[ 'r', 3 ],[ 's', 2 ],[ 't', 1 ],[ 'y', 1 ]]
  const cc=c.map(e=>e[0])
  const t=Object.entries([...s.replace(/[^MeryChistma]/g,'')].sort().reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))
  if(!cc.every(e=>t.map(e=>e[0]).includes(e)))return 0
  for(let i=0;i<c.length;i++){
    r.push(t[i][1]/c[i][1])
  }
  return r.map(e=>~~e).sort((a,b)=>a-b)[0]
}

console.log(merryChristmas("MMmmeerrrrrryyCChhiissssttaa"))
console.log(merryChristmas("MMmmeerrrryyCChhiissssssttaa"))
console.log(merryChristmas("ChristmasChristmas"))