function getStrings(city) {
  const obj = city
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/\d/g, "")
    .split("")
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  return Object.entries(obj)
    .flat()
    .map((el) => {
      if (el === " ") {
        el = 0;
        return el;
      }
      if (typeof el === "number") {
        el = ":" + "*".repeat(el) + ",";
        return el;
      } else {
        return el;
      }
    })
    .join("")
    .replace(/,$/, "");
}
console.log(getStrings("L1as V0egas"));
