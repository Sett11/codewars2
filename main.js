function whoseBicycle(diary1, diary2, diary3) {
  const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8
  }
  const db = [Object.values(diary1), Object.values(diary2), Object.values(diary3)].map(el => el.reduce((acc,curr) => acc+curr,0))
  let gam = db.lastIndexOf(Math.max(...db))
  return `I need to buy a bicycle for my ${gam === 0 ? 'first' : gam === 1 ? 'second' : 'third'} son.`
}




console.log(whoseBicycle({
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 5
},
{
  'algebra':6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
},
{
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}))