function mirror(t) {
  let s = Math.max(...t.split` `.map((el) => el.length)) + 4,
    s1 = s - 4;
  let arr = t.split` `.map(
    (el) =>
      "\n* " + el.split(``).reverse().join`` + " ".repeat(s1 - el.length) + " *\n"
  ).join``.replace(/\*\n\n\*/g, "*\n*");
  return "*".repeat(s) + arr + "*".repeat(s);
}
console.log(mirror("nfstvbq lei aw"));
