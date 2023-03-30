toBcd=(n,f=x=>(x).toString(2),s=n<0?'-':'')=>s+[...Math.abs(n)+''].map(e=>'0'.repeat(4-f(+e).length)+f(+e)).join` `

console.log(toBcd(-10))