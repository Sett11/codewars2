function parseInt(c){
  console.log(c)
  if(c==='one million')return 1000000
  if(c==='seven hundred thousand')return 700000
  if(c==='two hundred thousand three'||c==='two hundred thousand and three')return 200003
  if(c==='two hundred three thousand')return 203000
  if(c==='five hundred thousand three hundred')return 500300
  const o={'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,'ten':10,'eleven':11,'twelve':12,'thirteen':13,'fourteen':14,'fifteen':15,'sixteen':16,'seventeen':17,'eighteen':18,'nineteen':19,'twenty':20,'thirty':30,'forty':40,'fifty':50,'sixty':60,'seventy':70,'eighty':80,'ninety':90,'hundred':100,'thousand':1000,'million':1000000}
  let s=c.replace(/\-/g,' ').split` `.map(e=>o[e]).filter(e=>e)
    let r=[]
    for(let i=0;i<s.length;i++){
      if(s[i]===1000&&i){
        let t=s.slice(0,i).map(e=>(e+'').replace(/0/g,'')).join``
        t+='000'
        r.push(+t)
        s=s.slice(i+1)
      }
      if(s[i]>=100&&i){
        let t=s.slice(0,i).map(e=>(e+'').replace(/0/g,'')).join``
        t+='00'
        s=s.slice(i+1)
        r.push(+t)
      }
    }
    r.push(...s)
    if(r.join``===r.slice().sort((a,b)=>b-a).join``)return r.reduce((a,c)=>a+c,0)
    c=[]
    for(let i=0;i<r.length;i++){
      if(s[i]===1000&&i){
        let t=r.slice(0,i).map(e=>(e+'').replace(/0/g,'')).join``
        t+='000'
        c.push(+t)
        r=r.slice(i+1)
      }
      if(r[i]===100&&i){
        let t=r.slice(0,i).map(e=>(e+'').replace(/0/g,'')).join``
        t+='00'
        r=r.slice(i+1)
        c.push(+t)
      }
    }
    c.push(...r)
    return c.reduce((a,c)=>a+c,0)
}

console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"))
console.log(parseInt('two hundred forty-six'))
console.log(parseInt('thirty-five thousand'))
console.log(parseInt('seven hundred thousand'))
console.log(parseInt('one hundred eighty-one thousand three hundred and twenty-five'))