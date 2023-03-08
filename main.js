ìsZeroBalanced=n=>{
    if(n.length===1&&n[0]!==0||!n.length)return false
    if(n.length===3&&n.includes(0)&&n.includes(1)&&n.includes(-1)||!n.length||n.length===1&&n[0]===0)return true
    n.sort((a,b)=>a-b)
    let a=n.slice(0,Math.floor(n.length/2)),b=n.slice(Math.floor(n.length/2)).reverse(),c=[]
    for(let i=0;i<a.length;i++){c.push([a[i],b[i]]);a[i]='&';b[i]='&'}
    a=a.filter(e=>e!=='&'),b=b.filter(e=>e!=='&')
    if(b.length&&b[0]!==0)return false
    return c.every(e=>e.reduce((a,c)=>a+c)===0)
  }
console.log(ìsZeroBalanced([ -3, 2, 1, 3, -1, -2 ]))