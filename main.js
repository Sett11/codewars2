function all(arr, fun) {
    if(arr.length === 0){
        return true
    }
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fun(arr[i]));
//   }
//   return newArr.includes(false) ? false : true
return [...arr.filter(fun)].length !== 0 ? true : false
}
console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  })
);
