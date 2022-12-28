function filterHomogenous(a) {
  return a
    .filter((el) => {
      return (
        el.every((el) => typeof el === "number") ||
        el.every((el) => typeof el === "string") ||
        el.every((el) => typeof el === "object")
      );
    })
    .filter((el) => el.length !== 0);
}
console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]));
