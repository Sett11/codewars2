const shuffleIt = (arr,...arg) => {
  for(let i = 0; i < arg.length; i++){
    [arr[arg[i][0]], arr[arg[i][1]]] = [arr[arg[i][1]], arr[arg[i][0]]]
  }
  return arr
}
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]))