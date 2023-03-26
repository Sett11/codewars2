function solve(a,b,c=[]){
  const r=Array(b-1).fill(1).map((e,i)=>i+1).filter(e=>e>=a).map(e=>[e,Array(e).fill(1).map((z,v)=>v+1).filter(u=>e%u===0).reduce((a,c)=>a+c,0)/e])
  for(let i=0;i<r.length;i++){
    let innerArr=[]
    innerArr.push(r[i])
    for(let j=i+1;j<r.length;j++){
      if(r[i][1]===r[j][1]){
        innerArr.push(r[j])
        r[j]='&'
      }
    }
    if(innerArr.length>1&&!innerArr.includes('&'))c.push(innerArr)
    innerArr=[]
  }
  return c.map(e=>e[0][0]).reduce((a,c)=>a+c,0)
 }

 console.log(solve(1,500))