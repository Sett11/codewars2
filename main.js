function sc(floor){
  if(floor<=1)return ''
  let res = `${'Aa~ '.repeat(floor-1)}${'Pa!'}`
  return floor<7?res + ' ' + 'Aa!':res
}
console.log(sc(1))