function loneliest(m,n=[...(m+'')].map(Number),c=100){
    n=n.map((e,i,v)=>[e,(v.slice((i-e)<0?0:i-e,i).concat(v.slice(i+1,i+e+1))).reduce((a,c)=>a+c,0)])
    n.forEach(e=>c=Math.min(c,e[1]))
    return n.some(e=>e[0]===1&&e[1]===c)
}

console.log(loneliest(34315))