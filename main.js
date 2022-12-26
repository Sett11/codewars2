function remove(s) {
  return s.split` `
    .map((el) =>
      el.indexOf("!") === el.lastIndexOf("!") && el.includes("!")
        ? el === "&"
        : el
    )
    .filter((el) => el !== false)
    .join(" ");
}
console.log(remove("Hi! Hi Hi!! Hi!"));
