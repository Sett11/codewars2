function getOrder(input) {
  const menu = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];
  const arr = [];
  for (let el of menu) {
    arr.push(input.match(new RegExp(el, "gi")));
  }
  return []
    .concat(...arr)
    .filter((el) => el)
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
}
