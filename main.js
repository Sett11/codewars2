const permuteAPalindrome = (input) =>
  [...input].sort().join("").replace(/(.)\1/g, "").length < 2;

console.log(permuteAPalindrome("racecars"));
