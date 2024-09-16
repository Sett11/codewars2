const gcd=(a,b)=>b===0?a:gcd(b,a%b)
const parse=x=>{
    let a=x.replace(/\(\d+\)/g,' $& ').split` `
    return [[a[0],+a[1].slice(1,-1)],[a[2],+a[3].slice(1,-1)]]
}

function chemistry(a,b){
  let x=parse(a),y=parse(b)
  let g1=gcd(x[1][1],y[0][1]),g2=gcd(x[0][1],y[1][1])
  return [y[0][0]+`(${y[0][1]/g1})`+x[1][0]+`(${x[1][1]/g1})`,x[0][0]+`(${x[0][1]/g2})`+y[1][0]+`(${y[1][1]/g2})`]
}

console.log(chemistry("I93HK(14587)hjkoLO(26320)","d2(24330)4qA2v(22634)"))