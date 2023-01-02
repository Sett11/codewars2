const ultimateReverse = (s) => {
  const arr = [];
  const z = s.join``.split``.reverse();
  for (let i = 0; i < s.length; i++) {
    arr.push(z.splice(0, s[i].length).join``);
  }
  return arr;
};
console.log(
  ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])
);
