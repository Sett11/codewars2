function evenOrOdd(str) {
  str = str.split("").map(Number);
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      arr1.push(str[i]);
    } else {
      arr2.push(str[i]);
    }
  }
  return arr1.reduce((acc, curr) => acc + curr,0) >
    arr2.reduce((acc, curr) => acc + curr,0)
    ? "Even is greater than Odd"
    : arr1.reduce((acc, curr) => acc + curr,0) <
      arr2.reduce((acc, curr) => acc + curr,0)
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}
console.log(evenOrOdd("123"));
