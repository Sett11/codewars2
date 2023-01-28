function sortArrays(arr1, arr2) {
  const res1 = arr2
      .slice()
      .map((el, i) => [el, i])
      .sort((a, b) => a[0] - b[0] || a[1] - b[1])
      .map((el, i) => {
        return [el[1], i];
      }),
    array1 = arr1.slice().map((el, i) => [el, i]);
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < res1.length; j++) {
      if (array1[i][1] === res1[j][0]) {
        array1[i].push(res1[j][1]);
      }
    }
  }
  const finres1 = array1.sort((a, b) => a[2] - b[2]).map((el) => el[0]);
  const res2 = arr1
      .slice()
      .map((el, i) => [el, i])
      .sort((a, b) => a[0] - b[0] || a[1] - b[1])
      .map((el, i) => {
        return [el[1], i];
      }),
    array2 = arr2.slice().map((el, i) => [el, i]);
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < res2.length; j++) {
      if (array2[i][1] === res2[j][0]) {
        array2[i].push(res2[j][1]);
      }
    }
  }
  const finres2 = array2.sort((a, b) => a[2] - b[2]).map((el) => el[0]);
  return [finres1, finres2];
}
console.log(sortArrays([5, 6, 9, 2, 6, 5], [3, 6, 7, 4, 8, 1]));
