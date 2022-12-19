function well(x) {
  if (x.length === 0) {
    return "Fail!";
  }
  const res = x
    .flat(10)
    .filter((el) => typeof el === "string")
    .map((el) => el.toLowerCase())
    .filter((el) => el === "good");
  return res.length === 1 || res.length === 2
    ? "Publish!"
    : res.length > 2
    ? "I smell a series!"
    : "Fail!";
}
console.log(
  well([
    ["bAd", "bad", "cheat"],
    [6, 16, "BAD", "bad", 16, 3],
    [3, 16, "CoNcenTraTe", 6, 16, "bAd"],
  ])
);
