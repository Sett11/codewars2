function multiples(s1, s2, s3) {
  const arr = [];
  for (let i = 1; i < s3; i++) {
    arr.push(i);
  }
  return arr.filter((el) => el % s1 === 0 && el % s2 === 0);
}
console.log(multiples(13, 5, 800));
