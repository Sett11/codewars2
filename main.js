function parameter(n,f=(x,y=[...x+''].map(Number))=>[y.reduce((a,c)=>a+c,0),y.reduce((a,c)=>a*c,1)]){
  const r=f(n)
 for(let i=Math.max(...r);;i++)if(r.every(e=>i%e===0))return i
}

console.log(parameter(123))