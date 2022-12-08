function outed(meet, boss){
  const val = Object.values(meet)
  const key = Object.keys(meet)
  const searchInd = key.indexOf(boss)
  val[searchInd] = val[searchInd] * 2
  const res = val.reduce((acc, curr) => acc + curr)
  return res / key.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'))