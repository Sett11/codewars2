function arriveToTheSum(a,n=a.reduce((a,c)=>a+c,0)){
  const f=(x,[a,b,c]=x)=>[['a+b-c'],['a-b+c'],['a*b*c'],['a/b/c'],['a+b*c'],['a+b/c'],['a-b*c'],['a-b/c'],['a*b+c'],['a/b+c'],['a*b-c'],['a/b-c'],['a-b*c'],['a-b/c'],['a*b/c'],['a/b*c']]
  const r=(a,s)=>s.replace(/./g,e=>e==='a'?a[0]:e==='b'?a[1]:e==='c'?a[2]:e),v=(a,s)=>s.replace(/./g,e=>e==='a'?a[1]:e==='b'?a[0]:e==='c'?a[2]:e),z=(a,s)=>s.replace(/./g,e=>e==='a'?a[2]:e==='b'?a[1]:e==='c'?a[0]:e),q=(a,s)=>s.replace(/./g,e=>e==='a'?a[0]:e==='b'?a[2]:e==='c'?a[1]:e),w=(a,s)=>s.replace(/./g,e=>e==='a'?a[2]:e==='b'?a[0]:e==='c'?a[1]:e)
  return f(a).map(e=>[e,['('+e[0].slice(0,3)+')'+e[0].slice(3)],[e[0].slice(0,2)+'('+e[0].slice(2)+')']]).flat().map(u=>u.map(e=>[[r(a,e),eval(r(a,e))],[v(a,e),eval(v(a,e))],[z(a,e),eval(z(a,e))],[q(a,e),eval(q(a,e))],[w(a,e),eval(w(a,e))]])).flat(2).filter(e=>e[1]===n).map(e=>e[0])[0]||''
}

console.log(arriveToTheSum([ 1,2,5 ]))
console.log(arriveToTheSum([ 11, 7, 6 ]))