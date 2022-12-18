function titleCase(title, minorWords) {
  if (!minorWords) {
    return title
      .split(" ")
      .map((el) => {
        el = el.toLowerCase()
        const first = el.charAt(0).toUpperCase();
        const last = el.slice(1);
        return first + last;
      })
      .join(" ");
  }
  const arr2 = minorWords.split(" ").map((el) => el.toLowerCase());
  const res = title
    .split(" ")
    .map((el) => el.toLowerCase().split(""))
    .map((el) => {
      if (arr2.includes(el.join(""))) {
        return el.join("");
      } else {
        el[0] = el[0].toUpperCase();
        return el.join("");
      }
    });
  if (res[0].length === 1) {
    res[0] = res[0].toUpperCase();
  }
  if (res[0].length > 1) {
    const first = res[0].charAt(0).toUpperCase();
    const last = res[0].slice(1);
    res[0] = first + last;
  }
  return res.join(" ");
}
console.log(titleCase("THE WIND IN THE WILLOWS"));
