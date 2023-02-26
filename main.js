function evaluate(a){
  b=a.join``.replace(/[\+\*]/g,' $& ').trim().split` `
  if(!+b[0]||!+b[b.length-1])return undefined
  for(let i=0;i<a.length-1;i++){if(+a[i]===+a[i]&&+a[i+1]===+a[i+1])return undefined}
  while(a.includes('*')){
    let c=a.indexOf('*'),tmp=a.slice(c-1,c+2)
   a=a.slice(0,c-1).concat([tmp[0]*tmp[2]]).concat(a.slice(c+2))
  }
  return a.filter(e=>+e===+e).map(Number).reduce((a,c)=>a+= +c)
}
console.log(evaluate(['10', '+', '20', '*','3', '+', '30']))
console.log(evaluate(['10', '+', '20', '*','3', '*']))
console.log(evaluate(['10', '20', '*','3']))