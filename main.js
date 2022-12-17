function pendulum(values) {
  const [arr1, arr2] = [[], []]
  values.sort((a,b) => a - b).map((el,i) => (i % 2 === 0 ? arr1 : arr2).push(el))
  return arr1.reverse().concat(arr2)
}
console.log(pendulum([9, 4, 6, 4, 10, 5]));
