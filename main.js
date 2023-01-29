sc=f=>{
  if(f<=1)return ''
  let r = `${'Aa~ '.repeat(f-1)}${'Pa!'}`
  return f<7?r + ' ' + 'Aa!':r
}
console.log(sc(1))