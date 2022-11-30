const concerts = {
  'Москва': new Date('2022-12-01'),
  'Казань': new Date('2021-07-02'),
  'Владивосток': new Date('2020-04-21'),
  'Калининград': new Date('2021-07-15'),
  'Омск': new Date('2022-12-18'),
  'Питер': new Date('2021-07-10'),
}

function chech(obj){
  return Object.keys(obj)
  .filter(el=> obj[el] > new Date())
  .sort((a,b) => obj[a] - obj[b])
 
}
console.log(chech(concerts))