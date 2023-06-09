const groceries={
  'Orange Juice': { price: 1.5, discount: 10, bogof: false },
  Chocolate: { price: 2, discount: 0, bogof: true },
  Sweetcorn: { price: 4, discount: 20, bogof: true },
  Apples: { price: 6, discount: 0, bogof: false },
  Pears: { price: 2, discount: 50, bogof: false }
}

function shoppingListCost(a){
  return +a.map(e=>{
    let t=groceries[e[0]].price*e[1]
    if(groceries[e[0]].bogof)t-=groceries[e[0]].price*(Math.floor(e[1]/2))
    t=t-(t/100)*groceries[e[0]].discount
    return t
  }).reduce((a,c)=>a+c,0).toFixed(2)
}

console.log(shoppingListCost([["Chocolate", 3],["Apples", 8],["Orange Juice", 15],["Pears",1]]))
console.log(shoppingListCost([["Sweetcorn", 12],["Pears", 6],["Apples", 5]]))