 const nextItem = (xs, item) => {
  arr = xs[Symbol.iterator]()
  for(let el of arr){
    if(el == item)
    return arr.next().value
  }
}
console.log(nextItem("testing", "t"))