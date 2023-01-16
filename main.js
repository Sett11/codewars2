function add() {
  return Object.values(arguments).map((el,i)=>el*++i).reduce((acc,curr)=>acc+curr,0)
}
console.log(add(100,200,300))