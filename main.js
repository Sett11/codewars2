function findEvenIndex(arr) {
  if(arr.reduce((acc, curr) => acc + curr, 0) - arr[0] === 0){
    return 0
  }
    let res = 0;
    let left = 0;
    let rigth = 0;
    for (let i = 1; i < arr.length; i++) {
      left = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
      rigth = arr.slice(i + 1, arr.length).reduce((acc, curr) => acc + curr, 0);
      if (left === rigth) {
        res = i;
        return res
      }
    }
    return -1
}
console.log(findEvenIndex([20,10,-80,10,10,15,35]))