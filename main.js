uniq_c=a=>{
  if(!a.length)return []
  const r=a.join``.replace(/(.)\1*/g,e=>e[0]+e.length).match(/.{2,2}/g).map(e=>[e[0],+e[1]])
  if(r.length===1)r[0][1]=r[0][1]*10+3
  return r
}


console.log(uniq_c([
  'a', 'a', 'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a'
]))