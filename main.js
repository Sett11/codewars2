const catchSignChange = (arr) => {
  let cou = 0;
  arr.map((el, i, arr) =>
    (el >= 0 && arr[i+1] < 0) || (el < 0 && arr[i+1] >= 0) ? cou++ : cou
  );
  return cou;
};

console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]));
