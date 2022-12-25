const isMonotone = (arr) => {
  if(arr.length === 0 || arr.length ===1){
    return true
  }
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    ar.push(arr[i] <= arr[i + 1]);
  }
  ar.length = arr.length - 1;
  return ar.every((el) => el === true);
};
console.log(isMonotone([1, 2, 3]));
