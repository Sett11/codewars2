const prevMultOfThree = (n) => {
  if(n < 9){
    return null
  }
  n = n.toString();
  if(n.length === 2 && n % 3 !== 0){
    return null
  }
  let val = true;
  while (val) {
    if (n % 9 === 0) {
      val = false;
      return Number(n) !== 0 ? Number(n) : null
    }
    if (n % 3 === 0) {
      return Number(n) !== 0 ? Number(n) : null
    }
    n = n.slice(0, n.length - 1);
  }
  return null;
};
console.log(prevMultOfThree(25));
