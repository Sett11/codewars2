function magNumber(i) {
  return i[0] === "PT92"
    ? Math.ceil((i[1] * 3) / 17)
    : i[0] === "M4A1" || i[0] === "M16A2"
    ? Math.ceil((i[1] * 3) / 30)
    : Math.ceil((i[1] * 3) / 5);
}

console.log(magNumber(["PSG1", 31]));
