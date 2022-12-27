function howMuchWater(water, load, clothes){
  if(load * 2 < clothes){
    return 'Too much clothes'
  }
  if(clothes < load){
    return 'Not enough clothes'
  }
  return Number((water * 1.1 ** (clothes-load)).toFixed(2))
}
console.log(howMuchWater(50,15,29))
