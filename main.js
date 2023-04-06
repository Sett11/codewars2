function goodVsEvil(a,b){
  const f=(x,y)=>y===0?x:y===1?x*2:y===2||y===3?x*3:y===4?x*4:x*10
  const r=(x,y)=>y===0?x:y===1||y===2||y===3?x*2:y===4?x*3:y===5?x*5:x*10
  const z=a.split` `.reduce((a,c,i)=>a+f(+c,i),0),v=b.split` `.reduce((a,c,i)=>a+r(+c,i),0),s='Battle Result: '
  return z<v?s+'Evil eradicates all trace of Good':z>v?s+'Good triumphs over Evil':s+'No victor on this battle field'
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))