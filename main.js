function duplicates(arr) {
  const arr1 = [],
    arr2 = [];
  for (let i of arr) {
    if (!arr1.includes(i)) {
      arr1.push(i);
    } else {
      arr2.push(i);
    }
  }
  return [...new Set(arr2)];
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
