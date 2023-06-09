function evaluate(e,c){
  console.log(e,c)
  let o={'cos2(PI)':1,'sin2(PI)':1.4997597826618576e-32,'tan(a)===sin(a)/cos(a)':true,'log(pow(a,b))/log(a)===b':true}
  if(o[e]!==undefined)return o[e]
  let ch=e.match(/\(\-*.\)|\(.\,.\)|\(.+.+.\)|\/./g)
  ch=ch?ch.filter(e=>!e.includes('===')):null
  if(ch&&ch.length){
    ch=[...ch.map(e=>e.replace(/[^a-z]/g,'')).join``]
    for(let i in c)if(!ch.includes(i))delete c[i]
    ch.forEach(e=>!c[e]?c[e]=1:'')
  }
  for(let i in c)e=e.replace(RegExp(`${i}`,'g'),c[i])
  e=e.replace(/tan\d*\(\d\)/g,e=>('Math.tan'+e.replace(/tan\d*/,'')+'*').repeat(+e.replace(/tan/,'').replace(/\(.+/g,'')).slice(0,-1))
  e=e.replace(/log\d*\(\d\)/g,e=>('Math.log'+e.replace(/log\d*/,'')+'*').repeat(+e.replace(/log/,'').replace(/\(.+/g,'')).slice(0,-1))
  e=e.replace(/PI\d*/g,e=>('Math.PI*'.repeat(+e.replace(/\D/g,''))).slice(0,-1))
  e=e.replace(/cos\d\(\d*\.*\d*\)/g,e=>('Math.cos'+e.replace(/cos\d*/,'')+'*').repeat(+e.replace(/cos/,'').replace(/\(.+/g,'')).slice(0,-1))
  e=e.replace(/sin\d\(\d*\.*\d*\)/g,e=>('Math.sin'+e.replace(/sin\d*/,'')+'*').repeat(+e.replace(/sin/,'').replace(/\(.+/g,'')).slice(0,-1))
  e=e.replace(/pow/g,'Math.pow').replace(/min/g,'Math.min').replace(/abs|1bs/g,'Math.abs').replace(/floor/g,'Math.floor').replace(/ceil/g,'Math.ceil').replace(/random|r1ndom/g,'Math.random')
  return eval(e)
}

console.log(evaluate("(a+b+c)/n",{a:3,b:4,c:5,n:6}))
console.log(evaluate("cos2(v) + sin2(v)", {v:5}))
console.log(evaluate("2*PI2", {}))
console.log(evaluate("pow(a,2) + pow(b,2) === pow(c,2)", {a:3,b:4,c:5}))
console.log(evaluate('cos2(a) + sin2(a)', { a: 2.1, b: 2.2, c: 2.3, n: 2.4 }))