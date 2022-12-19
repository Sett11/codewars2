function solution(pairs) {
  return Object.entries(pairs)
    .join("= ")
    .split("")
    .map((el) => {
      if (el === ",") {
        el = "=";
        return el;
      }
      if (el === "=") {
        el = ",";
        return el;
      } else {
        return el;
      }
    })
    .join(" ")
    .split(" ")
    .join("")
    .replace(/\=/g, " $& ");
}
console.log(solution({ a: 1, b: "2", c: 3, d: "4" }));
