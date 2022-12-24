const vampire_test = (a, b) => {
  const sum = (a * b).toString();
  const str = (a.toString() + b.toString()).split``;
  const obj1 = str.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const obj2 = sum.split``.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return (
    Object.entries(obj1).join``.replace(/,/g, "") ===
    Object.entries(obj2).join``.replace(/,/g, "")
  );
};
console.log(vampire_test(204, 615));
