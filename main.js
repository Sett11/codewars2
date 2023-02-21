function solve(a){
  const res=[], arr=Object.entries(a.slice().reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]||+a[0]- +b[0]).map(e=>{
    for(let i=0;i<e[1];i++){res.push(+e[0])}
  })
  return res
}
console.log(solve([4,9,5,0,7,3,8,4,9,0]))


