function dotCalculator(e) {
  const basic = e.split``.filter((el) => el !== " ");
  let ind = null;
  for (let i = 0; i < basic.length; i++) {
    if (basic[i] !== ".") {
      ind = i;
    }
  }
  if (basic[ind] === "+") {
    return (basic.slice(0, ind) + basic.slice(ind + 1, basic.length)).replace(
      /,/g,
      ""
    );
  }
  if (basic[ind] === "-") {
    const res =
      basic.slice(0, ind).length - basic.slice(ind + 1, basic.length).length;
    return basic
      .slice(0, ind - basic.slice(ind + 1, basic.length).length)
      .join("");
  }
  if (basic[ind] === "*") {
    return e.slice(0, ind).repeat(basic.slice(ind + 1, basic.length).length);
  }
  if (basic[ind] === "/") {
    return e.slice(
      0,
      Math.floor(
        (e.slice(0, ind).length - 1) / e.slice(ind + 3, e.length).length
      )
    );
  }
}
console.log(dotCalculator(". // .."));
