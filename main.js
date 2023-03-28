const food={ beef: [ 26, 0, 18 ],
  buffalo: [ 27, 0, 2 ],
  elk: [ 30, 0, 2 ],
  lamb: [ 23, 0, 19 ],
  pork: [ 20, 0, 11 ],
  rabbit: [ 29, 0, 8 ],
  chicken: [ 24, 0, 5 ],
  duck: [ 23, 0, 9 ],
  goose: [ 28, 0, 10 ],
  turkey: [ 26, 0, 2 ],
  bass: [ 24, 0, 5 ],
  catfish: [ 18, 0, 3 ],
  crab: [ 19, 0, 2 ],
  lobster: [ 21, 1, 1 ],
  salmon: [ 27, 0, 10 ],
  beans: [ 8, 25, 0 ],
  tofu: [ 7, 3, 3 ],
  cheddar: [ 21, 0, 28 ],
  eggs: [ 10, 2, 10 ],
  mozzarella: [ 18, 3, 18 ],
  parmesan: [ 30, 4, 22 ],
  beer: [ 0, 5, 0 ],
  wine: [ 0, 3, 0 ],
  juice: [ 0, 10, 0 ],
  milk: [ 3, 4, 2 ],
  cabbage: [ 1, 6, 0 ],
  broccoli: [ 3, 7, 0 ],
  corn: [ 3, 20, 1 ],
  mushrooms: [ 3, 3, 0 ],
  tomatoes: [ 1, 3, 0 ],
  potatoes: [ 2, 16, 0 ],
  olives: [ 1, 6, 11 ],
  cucumber: [ 1, 4, 0 ],
  apples: [ 0, 14, 0 ],
  bananas: [ 1, 23, 0 ],
  blackberries: [ 1, 10, 0 ],
  cherries: [ 1, 12, 0 ],
  lemons: [ 1, 9, 0 ],
  kiwi: [ 1, 15, 1 ],
  watermelon: [ 1, 8, 0 ],
  oat: [ 12, 50, 5 ],
  quinoa: [ 14, 60, 5 ],
  rice: [ 5, 28, 0 ],
  chocolate: [ 7, 45, 30 ],
  mayonnaise: [ 0, 0, 12 ] }

  function bulk(a){
    a=a.map(e=>e.split`, `.map(u=>[...food[u.split`g `[1]].map(z=>z*u.split`g `[0]/100)]))
    let p=a.map(e=>e.map(u=>u[0]).reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0),c=a.map(e=>e.map(u=>u.map((z,v)=>v!==2?z*4:z*9).reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0)
    return `Total proteins: ${p} grams, Total calories: ${c}`
  }

  console.log(bulk(["175g pork, 100g eggs, 25g chocolate", "175g goose, 200g cheddar, 250g milk, 300g kiwi", "100g catfish, 125g parmesan, 75g chocolate, 125g watermelon", "125g chicken, 25g beans, 50g lemons"]))
  console.log(bulk(["150g elk, 325g tofu, 150g watermelon", "75g pork, 50g mushrooms, 75g kiwi", "275g rabbit, 325g broccoli, 100g cherries", "225g duck, 200g potatoes, 175g parmesan, 25g wine", "225g rabbit, 125g broccoli"]))