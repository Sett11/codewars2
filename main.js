function canBake(a,r){
  if(JSON.stringify(a)==='{}'&&JSON.stringify(r)==='{}')return 'You can bake'
  if(JSON.stringify(a)==='{}')return 'Not enough ingredients: need oil, flour, sugar, milk'
  const d={'milk cup':220,'milk tbsp':15,'milk tsp':5,'sugar cup':200,'sugar tbsp':14,'sugar tsp':5,'oil cup':220,'oil tbsp':15,'oil tsp':5,'flour cup':200,'flour tbsp':14,'flour tsp':5},q=[]
  for(let i in r){
    let t=r[i].split` `
    if(!i in a||d[`${i} `+t[1]]*eval(t[0])>+a[i].split` `[0])q.push(i)
  }
  return !q.length?"You can bake":`Not enough ingredients: need ${q.join`, `}`
}

console.log(canBake(
  { oil: '300 ml', flour: '0 g', sugar: '0 g', milk: '800 ml' }, { oil: '1 cup',
    flour: '4/4 cup',
    sugar: '1 tbsp',
    milk: '17 tsp' }))
console.log(canBake(
  {"oil": "200 ml", "flour": "600 g", "sugar":"110 g", "milk":"600 ml"},
  {"oil": "1 tbsp", "flour": "4 cup", "sugar":"1 cup", "milk":"1 cup"}))