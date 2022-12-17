function removeSmallest(numbers) {
  const newArr = numbers.slice();
  const min = Math.min(...newArr);
  const ind = newArr.indexOf(min)
  newArr[ind] = '&'
  return newArr.filter((el) => el !== '&');
}
console.log(removeSmallest([2, 2, 1, 2, 1]));
