pizzaRewards=(c,m,n)=>Object.entries(c).filter(e=>e[1].filter(u=>u>=n).length>=m).map(e=>e[0])


console.log(pizzaRewards({ 'John Doe': [ 22, 30, 11, 17, 15, 52, 27, 12 ],
'Jane Doe': [ 5, 17, 30, 33, 40, 22, 26, 10, 11, 45 ] },5,20))