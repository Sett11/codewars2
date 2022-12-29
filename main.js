function paul(x) {
  const res = x
    .map((el) => {
      return el === "kata"
        ? 5
        : el === "Petes kata"
        ? 10
        : el === "eating"
        ? 1
        : 0;
    })
    .reduce((acc, curr) => acc + curr, 0);
  return res < 40
    ? "Super happy!"
    : res >= 40 && res < 70
    ? "Happy!"
    : res >= 70 && res < 100
    ? "Sad!"
    : "Miserable!";
}
console.log(paul(["life", "Petes kata", "Petes kata", "Petes kata", "eating"]));
