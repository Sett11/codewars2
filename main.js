const intDiff = (arr, n) => {
  let cou = 0;
  if (n === 0) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[j] - arr[i]) === n) {
          cou++;
        }
      }
    }
  } else{
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i];
        arr.map((el, ind) => (el - tmp === n && ind !== i ? cou++ : null));
      }
  }
  return cou;
};
console.log(intDiff([1, 1, 3, 3], 2));
