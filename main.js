function specialNumber(n) {
  return ("" + n)
    .split("")
    .map(Number)
    .filter((el) => el <= 5 && el >= 0).length === ("" + n)
    .split("")
    .map(Number).length
    ? "Special!!"
    : "NOT!!";
}
console.log(specialNumber(2553));
