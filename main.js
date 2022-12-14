var filterLucky = (x) =>
  x.map((el) => (el = [el].join("").split("").map(Number))).filter(el => el.includes(7)).map(el => Number(el.join('')))
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
